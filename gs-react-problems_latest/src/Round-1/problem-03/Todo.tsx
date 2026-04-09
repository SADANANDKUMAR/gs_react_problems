import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {v4 as uuid} from 'uuid';

import App from '../../App';

// ✅ Type
type Todo = {
    id: string;
    label: string;
    checked: boolean;
    created_at: number;
    completed_at?: number;
};

const STORAGE_KEY = 'todos';

// ✅ Load from localStorage
const loadTodos = (): Todo[] => {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
};

// ✅ Save to localStorage
const saveTodos = (todos: Todo[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

const Todo = () => {
    const [todos, setTodos] = useState<Todo[]>(() => {
        const stored = loadTodos();
        return stored.length
            ? stored
            : [
                  {
                      id: uuid(),
                      label: 'Buy groceries',
                      checked: false,
                      created_at: Date.now(),
                  },
                  {
                      id: uuid(),
                      label: 'Reboot computer',
                      checked: false,
                      created_at: Date.now(),
                  },
                  {
                      id: uuid(),
                      label: 'Ace CoderPad interview',
                      checked: true,
                      created_at: Date.now(),
                      completed_at: Date.now(),
                  },
              ];
    });

    // 🔥 Persist data
    useEffect(() => {
        saveTodos(todos);
    }, [todos]);

    // ➕ Add Todo
    const addTodo = useCallback(() => {
        const label = prompt('Enter task');
        if (!label?.trim()) return;

        setTodos((prev) => [
            {
                id: uuid(),
                label,
                checked: false,
                created_at: Date.now(),
            },
            ...prev,
        ]);
    }, []);

    // ✅ Toggle
    const toggleTodo = useCallback((id: string) => {
        setTodos((prev) =>
            prev.map((todo) => {
                if (todo.id !== id) return todo;

                const updated = {
                    ...todo,
                    checked: !todo.checked,
                };

                if (!todo.checked) {
                    updated.completed_at = Date.now();
                } else {
                    delete updated.completed_at;
                }

                return updated;
            }),
        );
    }, []);

    // ❌ Delete
    const deleteTodo = useCallback((id: string) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }, []);

    // 🔥 Sorting Logic
    const sortedTodos = useMemo(() => {
        const active = todos
            .filter((t) => !t.checked)
            .sort((a, b) => b.created_at - a.created_at);

        const completed = todos
            .filter((t) => t.checked)
            .sort((a, b) => (a.completed_at || 0) - (b.completed_at || 0));

        return [...active, ...completed];
    }, [todos]);

    return (
        <div style={{width: 300, margin: 'auto'}}>
            <h2>Todo List</h2>

            <button onClick={addTodo}>Add Task</button>

            {sortedTodos.map((todo) => (
                <div
                    key={todo.id}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: 10,
                    }}
                >
                    <label
                        style={{
                            textDecoration: todo.checked
                                ? 'line-through'
                                : 'none',
                            cursor: 'pointer',
                        }}
                    >
                        <input
                            type='checkbox'
                            checked={todo.checked}
                            onChange={() => toggleTodo(todo.id)}
                        />
                        {todo.label}
                    </label>

                    <button onClick={() => deleteTodo(todo.id)}>❌</button>
                </div>
            ))}
        </div>
    );
};

export default Todo;
