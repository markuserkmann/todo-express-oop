import express, { Router } from 'express'
import { ToDoController } from '../controllers/todo.js'

const router = Router()

router.post('/new-todo', (req, res) => ToDoController.createTodo(req, res))
router.get('/', (req, res) => ToDoController.getTodos(req, res))
router.patch('/:id', (req, res) => ToDoController.updateTodo(req, res))

export default router