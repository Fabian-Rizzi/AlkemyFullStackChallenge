import React, {useState, createContext} from "react";

export const TransactionsContext = createContext();

export const TransactionsContextProvider = props => {

    const [transactions, setTransactions] = useState([]);
    const addTransactions = (transaction) => {
        setTransactions([...transactions, transaction]);
    }

    return (
        <TransactionsContext.Provider value={{ transactions, setTransactions, addTransactions }}>
            {props.children}
        </TransactionsContext.Provider>
    )
}