import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setExpenses } from "../../features/expenses";

import styles from './AddExpenseForm.module.css';


const AddExpenseForm = (props) => {

    const [isValid, setIsValid] = useState(true);
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');

    const expenses = useSelector((state) => state.expenses.expenses);
    const dispatch = useDispatch();

    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    }

    const amountChangeHandler = (e) => {
        setAmount(e.target.value);
    }

    const dateChangeHandler = (e) => {
        setDate(e.target.value);
    }

    const categoryChangeHandler = (e) => {
        setCategory(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if( 
            title.trim().length === 0 &&
            amount.trim().length === 0 &&
            date === '' &&
            category.trim().length === 0
        ) {
            setIsValid(false);
            return;
        }

        const id = Math.random();
        const newList = { id, title, amount, date: new Date(date), category};
        dispatch(setExpenses([...expenses, newList]));
    }

    return (
        <form className={`${styles.ExpenseForm}`} onSubmit={submitHandler}>
            <div className={ `${styles.input} ${!isValid && styles.invalid}`}>
                <label htmlFor="title">Title</label>
                <input
                    type='text'
                    id="title"
                    value={title}
                    onChange={ titleChangeHandler }
                    
                />
            </div>
            <div className={`${styles.input}`}>
                <label htmlFor="amount">Amount</label>
                <input
                    type='number'
                    id="amount"
                    min='0.01'
                    step= '0.01'
                    value={amount}
                    onChange={ amountChangeHandler }
                />
            </div>
            <div className={`${styles.input}`}>
                <label htmlFor="date">Date</label>
                <input
                    type='date'
                    id="date"
                    min='2022-01-01'
                    value={date}
                    onChange={ dateChangeHandler }
                />
            </div>
            <div className={`${styles.input}`}>
                <label htmlFor="category">Category</label>
                <select
                    id="category"
                    value={category}
                    onChange={ categoryChangeHandler }
                >
                    <option value='health'>Health</option>
                    <option value='hobby'>Hobby</option>
                    <option value='education'>Education</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}
 
export default AddExpenseForm;