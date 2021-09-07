import React, { useState, useEffect } from 'react'

import ExpensesFilter from '../ExpensesFilter';
import ExpenseItem from '../ExpenseItem';
import Card from '../../Card';

import './styles.css';

export default function Expenses(props) {

    const [selectedYear, setSelectedYear] = useState('2021');
    const [filteredExpenses, setFilteredExpenses] = useState(
        props.expenses.filter(item => item.date.getFullYear().toString() === selectedYear)
    );


    const handleFilterChange = (year) => {
        console.log(year);
        setSelectedYear(year);
        setFilteredExpenses(props.expenses.filter(item => item.date.getFullYear().toString() === year));
    }

    useEffect(() => {
        setFilteredExpenses(props.expenses.filter(item => item.date.getFullYear().toString() === selectedYear));
    }, [props.expenses, selectedYear])


    return (
        <Card className="expenses">
            <ExpensesFilter selectFilter={handleFilterChange} selectedYear={selectedYear} />
            {filteredExpenses.length > 0 ? filteredExpenses.map(item =>
                <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />)
                : <h2 style={{ color: 'white', textAlign: 'center' }}>Nenhuma despesa salva</h2>}

        </Card>
    )
}
