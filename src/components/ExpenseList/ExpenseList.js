import React from "react";
import { useSelector } from "react-redux";

import styles from './ExpenseList.module.css';
import trash from '../../Images/trash-solid.svg';
import health from '../../Images/hand-holding-medical-solid.svg';
import hobby from '../../Images/headset-solid.svg';
import education from '../../Images/graduation-cap-solid.svg';


const ExpenseList = (props) => {

    const expenses = useSelector((state) => state.expenses.expenses);
    const spanColor = useSelector((state) => state.listColor.listColor);

    const categoryImageHandler = (category) => {
        switch(category) {
            case 'health' :
                return health;
            case 'hobby' :
                return hobby;
            case 'education' :
                return education;
            default :
                return;
        }
    }

    return (
        <ul className={`${styles['expense-list']}`}>
            {expenses.map(item => (
                <li key={item.id}>
                    <div className={`${styles['expense-list_image']}`}>
                        <img src={categoryImageHandler(item.category)} alt={item.category} />
                    </div>
                    <div className={`${styles['expense-list__row']}`}>
                        <div className={`${styles['expense-list__firstRow']}`}>
                            <h2>{item.title}</h2>
                            <img src={ trash } alt="trash" />
                        </div>
                        <div className={`${styles['expense-list__secondRow']}`}>
                            <p>{ item.date.getFullYear() }</p>
                            <p>${item.price}</p>
                        </div>
                    </div>
                    <span style={{backgroundColor: spanColor}}></span>
                </li>
            ))}
        </ul>
    );
}
 
export default ExpenseList;