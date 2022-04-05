import React from "react";
import styles from './Expense.module.css';
import plus from '../../Images/circle-plus-solid.svg';

const Expense = (props) => {
    return (
        <div className={ styles.expense }>
            <input 
                type='text'
                placeholder="Search for expenses"
            />
            <a href="/">
                <img src={ plus } alt="Add" />
                Add
            </a>
        </div>
    );
}
 
export default Expense;