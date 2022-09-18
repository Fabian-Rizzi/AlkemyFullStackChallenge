import React, {useState, createContext} from "react";

export const TransactionsContextCopy = createContext();

export const TransactionsContextCopyProvider = props => {

    const [transactionsExp, setTransactionsExp] = useState([]);
    const addTransactionsExp = (transactionExp) => {
        setTransactionsExp([...transactionsExp, transactionExp]);
    }

    return (
        <TransactionsContextCopy.Provider value={{ transactionsExp, setTransactionsExp, addTransactionsExp }}>
            {props.children}
        </TransactionsContextCopy.Provider>
    )
}