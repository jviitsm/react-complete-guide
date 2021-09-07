import React from 'react'

import ExpenseForm from '../ExpenseForm';

import './styles.css';

export default function NewExpense(props) {

    const saveExpenseDataHandler = (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString()
        };
        props.onExpenseSubmit(expenseData);

    }
           
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}
