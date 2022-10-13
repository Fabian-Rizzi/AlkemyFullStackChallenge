import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowBalance from './components/ShowBalance';
import BalanceContextProvider from './context/BalanceContext';
import { TransactionsContextProvider } from './context/TransactionsContext';
import { TransactionsContextCopyProvider } from './context/TransactionsContextCopy';
import Home from './routes/Home';
import TransactionDetailPage from './routes/TransactionDetailPage';
import UpdatePage from './routes/UpdatePage';




const App = () => {
    
    return (
        <TransactionsContextProvider>
            <TransactionsContextCopyProvider> 
                <BalanceContextProvider>
        <div className="container">
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/" element={<ShowBalance/>} />
                    <Route exact path="/transactions/:id/update" element={<UpdatePage/>} />
                    <Route exact path="/transactions/:id" element={<TransactionDetailPage/>} />
                </Routes>
            </Router>

        </div>
        </div>
        </BalanceContextProvider>
        </TransactionsContextCopyProvider>
        </TransactionsContextProvider>
        
    )
};



export default App;




