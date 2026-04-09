import {Todo} from './todo';

const KEY = 'todos';

export const loadTodos = (): Todo[] => {
    try {
        const data = localStorage.getItem(KEY);
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
};

export const saveTodos = (todos: Todo[]) => {
    try {
        localStorage.setItem(KEY, JSON.stringify(todos));
    } catch (e) {
        console.error(e);
    }
};
