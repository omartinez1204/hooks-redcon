import type{ Todo } from '@/interfaces/todo.interface'

interface TodoState{
    todos: Todo[],
    noTodos: number,
    actualizados: number,
}



export const useReducerTodo = (state:TodoState, action):state =>{

    return state;
}
