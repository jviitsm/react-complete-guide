import React from 'react'
import './styles.css';

export default function ExpenseItem() {
    return (
        <div className="expense-item"> 
            <div>13 de Março de 2021</div>
            <div className="expense-item__description">
            <h2>Seguro Veicular</h2>
            <div className="expense-item__price">R$ 295,67</div>
            </div>
        </div>
    )
}
