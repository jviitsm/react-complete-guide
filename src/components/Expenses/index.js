import React from 'react'

import ExpenseItem from '../ExpenseItem';
import Card from '../../Card';

import './styles.css';

export default function Expenses(props) {



    return (
        <Card className="expenses">
            <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date} />
            <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date} />
        </Card>
    )
}
