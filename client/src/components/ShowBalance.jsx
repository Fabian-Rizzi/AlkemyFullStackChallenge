import React, { useEffect, useState } from 'react'
import TransactionFinder from '../apis/TransactionFinder';
var balance;

const ShowBalance = () => {
  // const [balance, setBalance] = useState("");
  useEffect(() => {
    const fetchDataBalance = async () => {

      const incomes = await TransactionFinder.get(`/sumincomes`);
      const expenses = await TransactionFinder.get(`/sumexpenses`);
      const totalIncomes =  incomes.data.data.transactions;
      const totalExpenses = expenses.data.data.transactions;

      balance = (totalIncomes-totalExpenses);
console.log(balance);
  };  
  fetchDataBalance();  

}, []);

    // const userBalance = 

  return (
    
    <div>
        <h1 className='text-center'>Balance:{balance}</h1>
        <h1></h1>
    </div>
  )
}

export default ShowBalance