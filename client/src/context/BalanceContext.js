import { createContext, useState } from 'react';
import TransactionFinder from '../apis/TransactionFinder';
export const BalanceContext = createContext();






const BalanceProvider = ({children}) => {
    const [ balance, setBalance ] = useState(0);
    const fetchDataBalance = async () => {
        try {
        const incomes = await TransactionFinder.get(`/sumincomes`);
        const expenses = await TransactionFinder.get(`/sumexpenses`);
        const totalIncomes =  incomes.data.data.transactions;
        const totalExpenses = expenses.data.data.transactions;
        const result = (totalIncomes-totalExpenses);
        console.log('hola');
        setBalance(result);
  
        } catch (err) {
          console.log(err)
        }
    };  
    return (
        <BalanceContext.Provider
        value={{
            balance, setBalance,
            fetchDataBalance
        }}>
            {children}
        </BalanceContext.Provider>
    )
}

export default BalanceProvider