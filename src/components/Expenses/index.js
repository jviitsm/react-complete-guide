import React, {useState} from 'react'

import ExpensesFilter from '../ExpensesFilter';
import ExpenseItem from '../ExpenseItem';
import Card from '../../Card';

import './styles.css';

export default function Expenses(props) {

    const [selectedYear, setSelectedYear] = useState('2021');


    const handleFilterChange = (year) => {
        console.log(year);
        setSelectedYear(year);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selectFilter={handleFilterChange} selectedYear={selectedYear} />
            {props.expenses.length > 0 ? props.expenses.map(item =>
                <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />) 
                : <h2 style={{color: 'white', textAlign: 'center'}}>Nenhuma despesa salva</h2>}

        </Card>
    )
}
