import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => res.json({ status: 'ok', service: 'user-service' }));

app.get('/users/:id', (req, res) => {
  // Placeholder - return example user
  const id = req.params.id;
  res.json({ id, name: 'Sample User', email: 'user@example.com' });
});

app.listen(4002, () => console.log('User service listening on 4002'));
