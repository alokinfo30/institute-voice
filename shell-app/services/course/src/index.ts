import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => res.json({ status: 'ok', service: 'course-service' }));

app.get('/courses', (_req, res) => {
  // Placeholder - return example course list
  res.json([{ id: 'c1', title: 'Physics 101' }, { id: 'c2', title: 'Chemistry Basics' }]);
});

app.listen(4003, () => console.log('Course service listening on 4003'));
