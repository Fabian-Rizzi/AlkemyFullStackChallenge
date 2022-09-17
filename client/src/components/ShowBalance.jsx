import React, { useEffect } from 'react'
import TransactionFinder from '../apis/TransactionFinder';

const ShowBalance = () => {
  useEffect(() => {
    const fetchData = async () => {



      const incomes = await TransactionFinder.get(`/incomes`);
      const expenses = await TransactionFinder.get(`/expenses`);
      console.log(incomes);

  };
  fetchData();

}, []);

    // const userBalance = 

  return (
    <div>
        <h1 className='text-center'>Balance:</h1>
        <h1>{}</h1>
    </div>
  )
}

export default ShowBalance