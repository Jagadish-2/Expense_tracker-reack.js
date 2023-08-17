import React,{ useState } from "react";
import "./ExpensesForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //     enteredTitle:'',
  //     enteredAmount:'',
  //     enteredDate:''
  // })

  const titleChangeHandler = (event) => {
    //Method1 to call a useState()
    setEnteredTitle(event.target.value);
    // console.log(event.target.value);

    //Method2 to call a useState()
    // setUserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value,
    // });

    //Method3 to call a useState();
    // setUserInput((pervState) =>{
    //     return {...pervState, enteredTitle:event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    //Method1 to call a useState()
    setEnteredAmount(event.target.value);
    // console.log(event.target.value);

    //Method2 to call a useState()
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value,
    // });

    //Method3 to call a useState();
    //     setUserInput((pervState) =>{
    //         return {...pervState, enteredAmount:event.target.value };
    //     });
  };

  const dateChangeHandler = (event) => {
    //Method1 to call a useState()
    setEnteredDate(event.target.value);
    // console.log(event.target.value);

    //Method2 to call a useState()
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value,
    // });

    //Method3 to call a useState()
    // setUserInput((pervState) => {
    //     return {...pervState, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
