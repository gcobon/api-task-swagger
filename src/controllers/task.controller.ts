import { Handler } from 'express';
import { getConnection } from '../db';
import { nanoid } from 'nanoid';

export const getTask: Handler = (req, res) => {
  try {
    const data = getConnection().get('tasks').value();

    res.json(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getTaskById: Handler = (req, res) => {
  const id = req.params.id;

  try {
    const task = getConnection().get('tasks').find({ id }).value();

    if (!task) {
      return res.status(404).json({
        ok: false,
        message: 'Task was not found',
      });
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({ ok: false, message: 'server error', error });
  }
};

export const getTaskCount: Handler = (req, res) => {
  try {
    const count = getConnection().get('tasks').value().length;

    res.json({
      ok: true,
      result: count,
    });
  } catch (error) {}
};

export const createTask: Handler = (req, res) => {
  const { name, description } = req.body;

  const newTask = { id: nanoid(), name, description };

  try {
    getConnection().get('tasks').push(newTask).write();

    res.json(newTask);
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Server error', error });
  }
};

export const updateTask: Handler = (req, res) => {
  const id = req.params.id;
  const { name, description } = req.body;

  try {
    const task = getConnection().get('tasks').find({ id }).value();

    if (!task) {
      return res.status(404).json({
        ok: false,
        message: 'Task was not found',
      });
    }

    const taskUpdated = getConnection()
      .get('tasks')
      .find({ id })
      .assign({ name, description })
      .write();

    res.json(taskUpdated);
  } catch (error) {
    res.status(500).json({ ok: false, message: 'server error', error });
  }
};

export const deleteTask: Handler = (req, res) => {
  const id = req.params.id;

  try {
    const task = getConnection().get('tasks').find({ id }).value();

    if (!task) {
      return res.status(404).json({
        ok: false,
        message: 'Task was not found',
      });
    }

    getConnection().get('tasks').remove({ id }).write();

    res.json({ ok: true, message: 'Task deleted' });
  } catch (error) {
    res.status(500).send(error);
  }
};
