import { fileManager } from '../data/files.js'
import { Todo } from '../models/todo.js'

class todoController {
    constructor() {
        this.TODOS = []
    }
    async createTodo(req, res) {
        const task = req.body.task
        console.log(req.body)
        const newTodo = new Todo(Math.random().toString(), task)

        this.TODOS.push(newTodo)

        await fileManager.writeFile('./data/todos.json', this.TODOS)

        res.json({
            message: 'created new todo object',
            newTask: newTodo
        })
    }
    async getTodos(req, res) {
        await this.init()
        res.json({tasks: this.TODOS})
    }
    updateTodo (req, res) {
        const ID = req.params.id
        const updated = req.body.task

        const todoIndex = this.TODOS.findIndex((todo) => todo.id === ID)

        if(todoIndex < 0) {
            res.json({
                message: "ERROR! Could not find the task with such index"
            })
            throw new Error('COuld not find task!')
        }

        this.TODOS[todoIndex] = new Todo(this.TODOS[todoIndex].id, updated)

        res.json({
            message: 'Updated succesfully!',
            taskID: ID
        })
    }
    async init() {
        const todosData = await fileManager.readFile('./data/todos.json')

        if(todosData !== null){
            this.TODOS = todosData
        } else {
            this.TODOS = []
        }
    }
}

export const ToDoController = new todoController()