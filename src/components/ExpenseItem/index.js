import React, {useState} from 'react'
import ExpenseDate from '../ExpenseDate';
import Card from '../../Card';

import './styles.css';

export default function ExpenseItem(props) {
    
    const [title, setTitle] = useState(props.title);

    return (
        <Card className="expense-item"> 
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">R$ {props.amount}</div>
            </div>
        </Card>
    )
}
