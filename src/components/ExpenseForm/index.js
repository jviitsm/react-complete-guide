import React, { useState } from 'react'

import './styles.css';

export default function ExpenseForm(props) {

    const [userInput, setUserInput] = useState(
        {
            title: '',
            amount: '',
            date: '',
        }
    );

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, title: event.target.value }
        });
    };

    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, amount: event.target.value }
        });
    };

    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, date: event.target.value }
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        userInput.date = new Date(userInput.date);
        props.onSaveExpenseData(userInput);
        setUserInput
            ({
                title: '',
                amount: '',
                date: '',
            });

    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Titulo</label>
                    <input type="text" value={userInput.title} onChange={(e) => titleChangeHandler(e)} />
                </div>
                <div className="new-expense__control">
                    <label>Valor</label>
                    <input type="number" value={userInput.amount} min="0.01" step="0.01" onChange={(e) => amountChangeHandler(e)} />
                </div>
                <div className="new-expense__control">
                    <label>Data</label>
                    <input type="date" value={userInput.date} onChange={(e) => dateChangeHandler(e)} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Salvar</button>
            </div>
        </form>
    )
}
