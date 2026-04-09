import React from 'react';

import {Todo} from './todo';

type Props = {
    todo: Todo;
    handleToggle: (id: string) => void;
};

const Checkbox: React.FC<Props> = ({todo, handleToggle}) => {
    return (
        <div>
            <input
                id={todo.id}
                type='checkbox'
                checked={todo.checked}
                onChange={() => handleToggle(todo.id)}
            />
            <label htmlFor={todo.id}>{todo.label}</label>
        </div>
    );
};

export default Checkbox;
