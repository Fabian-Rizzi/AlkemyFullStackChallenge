import React from 'react'
import AddTransaction from '../components/AddTransaction'
import Header from '../components/Header'
import TransactionList from '../components/TransactionList'

const Home = () => {
  return (
    <div>
        <Header />
        <AddTransaction />
        <TransactionList />
    </div>
  )
}

export default Home