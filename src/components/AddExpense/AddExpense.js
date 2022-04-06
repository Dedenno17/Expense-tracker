import React from 'react';
import { Link } from 'react-router-dom';

import styles from './AddExpense.module.css';
import AddExpenseForm from './AddExpenseForm';
import leftArrow from '../../Images/circle-left-regular.svg';
import xmark from '../../Images/circle-xmark-regular.svg';

const AddExpense = (props) => {
    return (
        <div className={`${styles['add-expense']}`}>
            <div className={`${styles['add-expense_links']}`}>
                <Link to='/'>
                    <img src={leftArrow} alt='left arrow' />
                    <p>Back</p>
                </Link>
                <Link to='/'>
                    <img src={xmark} alt='x mark' />
                    <p>Cancel</p>
                </Link>
            </div>
            <AddExpenseForm />
        </div>
    );
}
 
export default AddExpense;