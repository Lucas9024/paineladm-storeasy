import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
        });
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            {props.edit ? (
                <>
                    <input
                        placeholder="Atualize o seu item"
                        value={input}
                        onChange={handleChange}
                        name="text"
                        ref={inputRef}
                        className="todo-input edit"
                    />
                    <button onClick={handleSubmit} className="todo-button edit">
                        Update
                    </button>
                </>
            ) : (
                <>
                    <input
                        placeholder="Adicionar a lista"
                        value={input}
                        onChange={handleChange}
                        name="text"
                        className="todo-input"
                        ref={inputRef}
                    />
                    <button onClick={handleSubmit} className="todo-button">
                        Add lista
                    </button>
                </>
            )}
        </form>
    );
}

export default TodoForm;
