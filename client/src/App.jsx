import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TransactionsContextProvider } from './context/TransactionsContext';
import Home from './routes/Home';
import TransactionDetailPage from './routes/TransactionDetailPage';
import UpdatePage from './routes/UpdatePage';

const App = () => {
    return (
        <TransactionsContextProvider>
        <div className="container">
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/transactions/:id/update" element={<UpdatePage/>} />
                    <Route exact path="/transactions/:id" element={<TransactionDetailPage/>} />
                </Routes>
            </Router>
        </div>
        </div>
        </TransactionsContextProvider>
    )
};

export default App;