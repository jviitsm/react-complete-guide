import React, { useState } from 'react'
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
function App() {

  const [expenses, setExpenses] = useState([]);


  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevState) => { return [...prevState, expense] });
  }

  return (
    <div>
      <NewExpense onExpenseSubmit={addExpenseHandler} />
      <Expenses expenses={expenses} />

    </div>
  );
}

export default App;
