import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => res.json({ status: 'ok', service: 'content-service' }));

app.get('/content', (_req, res) => {
  // Placeholder - return example content items
  res.json([{ id: 'ct1', title: 'Lecture 1 - Intro' }, { id: 'ct2', title: 'Notes - Chapter 1' }]);
});

app.listen(4005, () => console.log('Content service listening on 4005'));
