import React, { useState, useEffect } from 'react';
import TodoItem from './todo-item';
import { Todo } from './todo.model';

/**
 * 
Exercise 1: Todo List with Local Storage​
​Requirements:

1. Implement a Todo List with add/delete/toggle-complete functionality
2. Persist data to localStorage
3. Use functional components with Hooks
4. Add input validation (empty todo prevention)

 */
const TodoListFeature = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState<Todo[]>(() => {
        const lsItems = localStorage.getItem('todos');
        if (lsItems) {
            return JSON.parse(lsItems);
        }
        return [];
    });

    const clickAddTodo = ({ name }: { name: string }) => {
        if (name.trim().length === 0) {
            return;
        }
        setTodos((prev) => [
            ...prev,
            { id: prev.length + 1, name, completed: false },
        ]);
    };

    const onToggleCompleted = React.useCallback((it: Todo) => {
        setTodos((prev) => {
            return prev.map((todo) =>
                todo.id === it.id
                    ? {
                          ...todo,
                          completed: !todo.completed,
                      }
                    : todo
            );
        });
    }, []);

    const onClickDelete = React.useCallback((it: Todo) => {
        setTodos((prev) => {
            return prev.filter((todo) => todo.id !== it.id);
        });
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <div>
            <h1>TODO LIST</h1>
            <div className="actions-bar">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={() => clickAddTodo({ name: input })}>
                    Add Todo
                </button>
                <button>Delete todo</button>
            </div>

            <div className="todo-list">
                {todos?.length > 0 &&
                    todos.map((it) => {
                        return (
                            <div key={it.id}>
                                <TodoItem
                                    id={it.id}
                                    name={it.name}
                                    completed={it.completed}
                                    onToggleCompleted={onToggleCompleted}
                                    onClickDelete={onClickDelete}
                                />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default TodoListFeature;
