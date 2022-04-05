import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

//pages
import ExpenseSearch from './components/ExpenseSearch/ExpenseSearch';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Expense Tracker App</h1>
        <Routes>
          <Route path='/' element={<ExpenseSearch />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
