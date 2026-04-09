import React, {useCallback, useMemo, useState} from 'react';
import {v4 as uuid} from 'uuid';

import Checkbox from './Checkbox';
import {Todo} from './todo';

const initialData: Todo[] = [
    {
        id: uuid(),
        label: 'Buy groceries',
        checked: false,
    },
    {
        id: uuid(),
        label: 'Reboot computer',
        checked: false,
    },
    {
        id: uuid(),
        label: 'Ace CoderPad interview',
        checked: true,
    },
];

const ParentTodo = () => {
    const [todos, setTodos] = useState<Todo[]>(initialData);
    // counts
    const completedCount = useMemo(() => {
        return todos.filter((todo) => todo.checked).length;
    }, [todos]);

    const handleToggle = useCallback((id: string) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? {...todo, checked: !todo.checked} : todo,
            ),
        );
    }, []);

    return (
        <div>
            <h3>To Do List</h3>
            <p>You have completed {completedCount} tasks</p>

            {todos.length === 0 ? (
                <p>No tasks available</p>
            ) : (
                todos.map((todo) => (
                    <Checkbox
                        key={todo.id}
                        todo={todo}
                        handleToggle={handleToggle}
                    />
                ))
            )}
        </div>
    );
};

export default ParentTodo;
