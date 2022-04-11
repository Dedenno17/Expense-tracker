import { useDispatch, useSelector } from "react-redux";

import styles from './ExpenseList.module.css';
import trash from '../../Images/trash-solid.svg';
import health from '../../Images/hand-holding-medical-solid.svg';
import hobby from '../../Images/headset-solid.svg';
import education from '../../Images/graduation-cap-solid.svg';
import { setExpenses } from "../../features/expenses";


const ExpenseList = (props) => {

    const expenses = useSelector((state) => state.expenses.expenses);
    const colors = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51' ];

    const dispatch = useDispatch();
  

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

    const deleteListHandler = (id) => {
        const newList = expenses.filter(item => item.id !== id);
        dispatch(setExpenses(newList));
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
                            <img src={ trash } alt="trash" onClick={() => deleteListHandler(item.id)}/>
                        </div>
                        <div className={`${styles['expense-list__secondRow']}`}>
                            <p>{item.date.getFullYear()}-{item.date.getMonth()}-{item.date.getDate()}</p>
                            <p>${item.amount}</p>
                        </div>
                    </div>
                    <span style={{backgroundColor: colors[Math.floor(item.id * 5)]}}></span>
                </li>
            ))}
        </ul>
    );
}
 
export default ExpenseList;