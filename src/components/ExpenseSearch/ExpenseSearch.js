import { Fragment, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

import styles from './ExpenseSearch.module.css';
import plus from '../../Images/circle-plus-solid.svg';
import search from '../../Images/search-solid.svg';
import ExpenseList from "../ExpenseList/ExpenseList";

const ExpenseSearch = (props) => {

    const expenses = useSelector(state => state.expenses.expenses);
    const [searchList, setSearchList] = useState('');
    const [filteredExpenses, setFilteredExpenses] = useState(expenses);


    useEffect(() => {
            const identifier = setTimeout(() => {
                if( searchList.trim().lenght === 0 ) {
                    setFilteredExpenses(expenses);
                }else{
                    const newList = expenses.filter(item => item.title.includes(searchList));
                    setFilteredExpenses(newList);
                    console.log(searchList);
                }
            }, 1000)

            return () => {
                clearTimeout(identifier);
            }
    }, [searchList, expenses]);

    return (
        <Fragment>
            <div className={ styles.expense }>
                <div className={`${styles['expense-input']}`}>
                    <input 
                        type='text'
                        value={searchList}
                        onChange={(event) => setSearchList(event.target.value)}
                        placeholder="Search for expenses"
                    />
                    <img src={search} alt='search' />
                </div>
                <Link to="/add">
                    <img src={ plus } alt="Add" />
                    Add
                </Link>
            </div>
            <ExpenseList filteredExpenses={ filteredExpenses }/>
        </Fragment>
    );
}
 
export default ExpenseSearch;