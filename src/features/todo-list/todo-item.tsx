import React from 'react';
import { Todo } from './todo.model';
import './todo-item.css';
import Checkbox from '../../components/Checkbox';

interface TodoItemProps {
    id: number;
    name: string;
    completed: boolean;
    onToggleCompleted: (it: Todo) => void;
    onClickDelete: (it: Todo) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
    id,
    name,
    completed,
    onToggleCompleted,
    onClickDelete,
}) => {
    console.log(`render todo item`, id);
    return (
        <div className="todo-item">
            <Checkbox
                id={`checkbox-${id}`}
                name={name}
                label={name}
                checked={completed}
                onChange={() => onToggleCompleted({ id, name, completed })}
            />
            <button
                className="delete-btn"
                onClick={() => onClickDelete({ id, name, completed })}
            >
                x
            </button>
        </div>
    );
};

export default React.memo(TodoItem);
