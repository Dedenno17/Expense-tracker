import React from "react";

import styles from './AddExpenseForm.module.css';

const AddExpenseForm = (props) => {
    return (
        <form>
            <div className={`${styles.input}`}>
                <label htmlFor="title">Title</label>
                <input
                    type='text'
                    id="title"
                />
            </div>
            <div className={`${styles.input}`}>
                <label htmlFor="amount">Amount</label>
                <input
                    type='number'
                    id="amount"
                />
            </div>
            <div className={`${styles.input}`}>
                <label htmlFor="category">Category</label>
                <select
                    id="category"
                >
                    <option>Health</option>
                    <option>Hobby</option>
                    <option>Education</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}
 
export default AddExpenseForm;