import React, { useEffect, useContext } from 'react'

import { BalanceContext } from '../context/BalanceContext';


const ShowBalance = () => {
const { balance, fetchDataBalance } = useContext(BalanceContext);

  useEffect(() => {

  fetchDataBalance();  
}, []);

  return (
    
    <div>
        <h1 className='text-center display-4 ' id='balance'>Balance: {balance}</h1>
        
    </div>
  )
}



export default ShowBalance