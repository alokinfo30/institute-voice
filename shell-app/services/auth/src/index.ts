import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';

const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';

// simple in-memory user store for scaffold
const users: Record<string, any> = {
  'test@example.com': {
    id: '1',
    email: 'test@example.com',
    passwordHash: (bcrypt as any).hashSync('password123', 8),
    name: 'Test User'
  }
};

app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  const user = users[email];
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });
  const match = (bcrypt as any).compareSync(password, user.passwordHash);
  if (!match) return res.status(401).json({ error: 'Invalid credentials' });

  const token = jwt.sign({ sub: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
  return res.json({ access_token: token, user: { id: user.id, email: user.email, name: user.name } });
});

app.get('/auth/me', (req, res) => {
  const auth = req.headers.authorization?.split(' ')[1];
  if (!auth) return res.status(401).send({ error: 'Unauthorized' });
  try {
    const data = jwt.verify(auth, JWT_SECRET) as any;
    return res.json({ id: data.sub, email: data.email, name: 'Test User' });
  } catch (err) {
    return res.status(401).send({ error: 'Invalid token' });
  }
});

app.listen(4001, () => console.log('Auth service listening on 4001'));
