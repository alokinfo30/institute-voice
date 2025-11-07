import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => res.json({ status: 'ok', service: 'assessment-service' }));

app.get('/assessments', (_req, res) => {
  // Placeholder - return example assessments
  res.json([{ id: 'a1', title: 'Chapter 1 Quiz' }, { id: 'a2', title: 'Mock Test 1' }]);
});

app.listen(4004, () => console.log('Assessment service listening on 4004'));
