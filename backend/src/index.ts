import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get('/events', async (req, res) => {
  const events = await prisma.event.findMany({
    orderBy: { date: 'asc' },
  });
  res.json(events);
});

app.post('/events', async (req, res) => {
  const { title, date } = req.body;

  try {
    const newEvent = await prisma.event.create({
      data: { title, date: new Date(date) },
    });
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao criar evento' });
  }
});

app.put('/events/:id', async (req, res) => {
  const { id } = req.params;
  const { title, date } = req.body;

  try {
    const updated = await prisma.event.update({
      where: { id: Number(id) },
      data: { title, date: new Date(date) },
    });
    res.json(updated);
  } catch {
    res.status(400).json({ error: 'Erro ao atualizar evento' });
  }
});

app.delete('/events/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.event.delete({ where: { id: Number(id) } });
    res.status(204).send();
  } catch {
    res.status(400).json({ error: 'Erro ao deletar evento' });
  }
});

app.listen(3000, () => {
  console.log('🚀 Servidor rodando em http://localhost:3000');
});
