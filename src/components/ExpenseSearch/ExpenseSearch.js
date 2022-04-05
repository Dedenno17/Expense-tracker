import React from "react";
import styles from './ExpenseSearch.module.css';
import plus from '../../Images/circle-plus-solid.svg';
import search from '../../Images/search-solid.svg';
import ExpenseList from "../ExpenseList/ExpenseList";

const ExpenseSearch = (props) => {
    return (
        <React.Fragment>
            <div className={ styles.expense }>
                <div className={`${styles['expense-input']}`}>
                    <input 
                        type='text'
                        placeholder="Search for expenses"
                    />
                    <img src={search} alt='search' />
                </div>
                <a href="/">
                    <img src={ plus } alt="Add" />
                    Add
                </a>
            </div>
            <ExpenseList />
        </React.Fragment>
    );
}
 
export default ExpenseSearch;