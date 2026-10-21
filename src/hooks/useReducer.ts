import type { Todo } from '@/interfaces/todo.interface'
import { customAlphabet } from 'nanoid';
const generarId = customAlphabet('123597463', 5);

interface TodoState {
    todos: Todo[],
    noTodos: number,
    actualizados: number,
    completados: number
}

type TodoAction =
    { type: 'ADD', payload: string }
    | { type: 'DELETE', payload: number }
    | { type: 'UPDATE', payload: number };

export const initialState = () :TodoState => {

    const todos = localStorage.getItem('lista-todos');
    console.log(todos)

    return {
        todos: [],
        noTodos:0,
        actualizados: 0,
        completados: 0
    }
}



export const useReducerTodo = (state: TodoState, action: TodoAction): TodoState => {

    switch (action.type) {
        case 'ADD': {
            const newTodo: Todo = {
                id: Number(generarId()),
                text: action.payload,
                completed: false
            }
            return {
                ...state,
                todos: [...state.todos, newTodo],
                noTodos: state.todos.length,
                actualizados: state.todos.length,
                completados: 4
            };
        }
        case 'DELETE': {
            const deleteTodo = state.todos.filter((item) => item.id !== action.payload)
            return {
                ...state,
                todos: deleteTodo,
                noTodos: state.todos.length
            };
        }
        case 'UPDATE': {
            const updateTodo = state.todos.map((item) => {
                if (action.payload === item.id) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }
                return item;
            })
            return {
                ...state,
                todos: updateTodo,
                noTodos: state.todos.length
            };
        }
        default:
            return state;

    }
}
