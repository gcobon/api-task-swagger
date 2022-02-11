import { Router } from 'express';
import {
  createTask,
  deleteTask,
  getTask,
  getTaskById,
  getTaskCount,
  updateTask,
} from '../controllers/task.controller';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     task:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: the auto-generated id of task
 *         name:
 *          type: string
 *          description: name of the task
 *         description:
 *           type: string
 *           descripcion: the description of the task
 *       required:
 *         -  name
 *         -  description
 *       example:
 *         id: asdf5488_44dfDU
 *         name: My first task
 *         description: I have to do something
 *     response:
 *       type: object
 *       properties:
 *         ok:
 *           type: boolean
 *           description: request status
 *         result:
 *          type: string | number | array
 *          description: request result
 *         message:
 *           type: string
 *           description: request message
 *         error:
 *           type: string
 *           description: error information
 *       required:
 *         -  ok
 *       example:
 *         ok: true
 *         result: somthing request result
 *         message: something request message
 *         error: error information
 *   parameters:
 *     taskId:
 *       in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *         description: task id
 */

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Tasks endpoint
 */

/**
 * @swagger
 * /task:
 *   get:
 *     summary: Return a task list
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: the list of tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/task'
 */
router.get('/task', getTask);

/**
 * @swagger
 * /task/count:
 *   get:
 *     summary: return total task count
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: total task created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/response'
 *
 */
router.get('/task/count', getTaskCount);

/**
 * @swagger
 * /task/{id}:
 *   get:
 *     summary: return a task by id
 *     tags: [Tasks]
 *     parameters:
 *       - $ref: '#/components/parameters/taskId'
 *     responses:
 *       200:
 *         description: get the task
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/task'
 *       404:
 *         description: task was not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/response'
 *       500:
 *         description: server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/response'
 *
 */
router.get('/task/:id', getTaskById);

/**
 * @swagger
 * /task:
 *   post:
 *     summary: create a new task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/task'
 *     responses:
 *       200:
 *         description: the task succesfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/task'
 *       500:
 *         description: some server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/response'
 */
router.post('/task', createTask);

/**
 * @swagger
 * /task/{id}:
 *   put:
 *     summary: update a task
 *     tags: [Tasks]
 *     parameters:
 *       - $ref: '#/components/parameters/taskId'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/task'
 *     responses:
 *       200:
 *         description: the task succesfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/task'
 *       404:
 *         description: task was not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/response'
 *       500:
 *         description: some server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/response'
 */
router.put('/task/:id', updateTask);

/**
 * @swagger
 * /task/{id}:
 *   delete:
 *     summary: delete a task by id
 *     tags: [Tasks]
 *     parameters:
 *       - $ref: '#/components/parameters/taskId'
 *     responses:
 *       200:
 *         description: the task was successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/response'
 *       404:
 *         description: the task was not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/response'
 *       500:
 *         description: some server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/response'
 *
 */
router.delete('/task/:id', deleteTask);

export default router;
