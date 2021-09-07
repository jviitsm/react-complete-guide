import React from 'react'

import ExpenseItem from '../ExpenseItem';
import Card from '../../Card';

import './styles.css';

export default function Expenses(props) {



    return (
        <Card className="expenses">
            {props.expenses ? props.expenses.map(item =>
                <ExpenseItem title={item.title} amount={item.amount} date={item.date} />) : ''}

        </Card>
    )
}
