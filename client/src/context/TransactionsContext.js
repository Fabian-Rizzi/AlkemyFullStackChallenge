import React, {useState, createContext} from "react";

export const TransactionsContext = createContext();

export const TransactionsContextProvider = props => {

    const [transactions, setTransactions] = useState([])

    return (
        <TransactionsContext.Provider value={{ transactions, setTransactions }}>
            {props.children}
        </TransactionsContext.Provider>
    )
}