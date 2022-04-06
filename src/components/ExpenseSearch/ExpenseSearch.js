import React from "react";
import { Link } from 'react-router-dom';

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
                <Link to="/add">
                    <img src={ plus } alt="Add" />
                    Add
                </Link>
            </div>
            <ExpenseList />
        </React.Fragment>
    );
}
 
export default ExpenseSearch;