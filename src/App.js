import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

//pages
import AddExpense from './components/AddExpense/AddExpense';
import ExpenseSearch from './components/ExpenseSearch/ExpenseSearch';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Expense Tracker App</h1>
        <Routes>
          <Route path='/' element={<ExpenseSearch />} />
          <Route path='/add' element={<AddExpense />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
