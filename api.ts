import { ITask } from "./types/tasks"

const baseUrl = 'http://localhost:3001'

export const getAllTodos = async(): Promise<ITask[]>=> {
    const res = await fetch(`${baseUrl}/tasks`, {cache: 'no-store'});
    const todos = await res.json();
    return todos;
}

export const addTodo  = async(todo: ITask): Promise<ITask> => {
    const res = await fetch(`${baseUrl}/tasks`, {
        method: 'POST',
        headers: {
            'Centent-typ':'application/json',
        },
        body: JSON.stringify(todo)
    })
    const newTodo = await  res.json();
    return newTodo;
}

export const updateTodo = async(todo:ITask): Promise<ITask> => {
    const res = await fetch(`${baseUrl}/tasks`);
    const todos:ITask[] = await res.json();

    const {id} = todo;
    const checkIndex = todos.findIndex(item => item.id === id)
    if (checkIndex === -1) {
        throw new Error("Not found")
    }
    const existingTodo = todos[checkIndex];
    const updateTodo = await fetch(`${baseUrl}/tasks/${existingTodo.id}`, {
        method: 'PUT',
        headers: {
            'Centent-typ':'application/json',
        },
        body: JSON.stringify({...todo,id:  existingTodo.id})
    })
    const data = await updateTodo.json()
    return data;
}

export const deleteTodo = async(id: string): Promise<ITask> => {
    const res = await fetch(`${baseUrl}/tasks/${id}`, {
        method:'DELETE'
    });
    const todo: ITask = await res.json();

    if (!todo) {
        throw new Error('Not Found')
    }
    return todo;
}