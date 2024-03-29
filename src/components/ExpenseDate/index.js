import React from 'react'

import './styles.css';

export default function ExpenseDate(props) {

    const month = props.date.toLocaleString('pt-br', { month: 'long' });
    const day = props.date.toLocaleString('pt-br', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    )
}
