import React from "react";
import styles from './ExpenseList.module.css';
import trash from '../../Images/trash-solid.svg';
import { useSelector } from "react-redux";

const ExpenseList = (props) => {

    const expenses = useSelector((state) => state.expenses.expenses);

    return (
        <ul className={`${styles['expense-list']}`}>
            {expenses.map(item => (
                <li key={item.id}>
                    <div className={`${styles['expense-list__item']}`}>
                        <h2>{item.title}</h2>
                        <p>{ item.date.getFullYear() }</p>
                    </div>
                    <div className={`${styles['expense-list__price']}`}>
                        <img src={ trash } alt="trash" />
                        <p>${item.price}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}
 
export default ExpenseList;