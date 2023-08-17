import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";


function ExpenseItem(props) {
    // const expenceDate = new Date(2023, 3 , 13);
    // const expenseTitle = "Car Insurance !!!"
    // const expenseAmount = 2045.87
  
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2> {props.title}</h2>
        <div className="expense-item__price ">RS.{props.amount}</div>
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;
