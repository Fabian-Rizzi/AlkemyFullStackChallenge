import React, { useEffect, useState } from 'react'
import TransactionFinder from '../apis/TransactionFinder';
var balance;

// 

const ShowBalance = () => {

  useEffect(() => {
    const fetchDataBalance = async () => {
      try {
      const incomes = await TransactionFinder.get(`/sumincomes`);
      const expenses = await TransactionFinder.get(`/sumexpenses`);
      const totalIncomes =  incomes.data.data.transactions;
      const totalExpenses = expenses.data.data.transactions;
      balance = (totalIncomes-totalExpenses);
console.log(balance);
      } catch (err) {
        console.log(err)
      }
  };  
  fetchDataBalance();  
}, []);
  return (
    
    <div>
        <h1 className='text-center'>Balance:{balance}</h1>
        <h1></h1>
    </div>
  )
}

export default ShowBalance