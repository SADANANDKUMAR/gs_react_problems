import React from 'react';

import {Todo} from './todo';

type Props = {
    todo: Todo;
    onToggle: (id: string, checked: boolean) => void;
};

const TodoItem: React.FC<Props> = ({todo, onToggle}) => {
    return (
        <div>
            <input
                type='checkbox'
                checked={todo.checked}
                onChange={(e) => onToggle(todo.id, e.target.checked)}
            />
            <span
                style={{textDecoration: todo.checked ? 'line-through' : 'none'}}
            >
                {todo.label}
            </span>
        </div>
    );
};

export default TodoItem;
