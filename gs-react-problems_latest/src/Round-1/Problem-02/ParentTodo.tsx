import React, {useCallback, useEffect, useState} from 'react';
import {v4 as uuid} from 'uuid';

import {loadTodos, saveTodos} from './storage';
import {Todo} from './todo';
import TodoItem from './TodoItem';

const initialData: Todo[] = [
    {id: uuid(), label: 'Buy groceries', checked: false},
    {id: uuid(), label: 'Reboot computer', checked: false},
    {id: uuid(), label: 'Ace CoderPad interview', checked: true},
];

const ParentTodo = () => {
    const [todos, setTodos] = useState<Todo[]>(() => {
        const stored = loadTodos();
        return stored.length ? stored : initialData;
    });

    // 🔥 Persist data
    useEffect(() => {
        saveTodos(todos);
    }, [todos]);

    // ➕ Add Todo
    const addTodo = useCallback(() => {
        const label = prompt('Enter task');
        if (!label?.trim()) return;

        setTodos((prev) => [{id: uuid(), label, checked: false}, ...prev]);
    }, []);

    // ✅ Toggle
    const handleToggle = useCallback((id: string, checked: boolean) => {
        setTodos((prev) =>
            prev.map((todo) => (todo.id === id ? {...todo, checked} : todo)),
        );
    }, []);

    return (
        <div>
            <h3>Todo List</h3>

            <button onClick={addTodo}>Add Task</button>

            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onToggle={handleToggle} />
            ))}
        </div>
    );
};

export default ParentTodo;
