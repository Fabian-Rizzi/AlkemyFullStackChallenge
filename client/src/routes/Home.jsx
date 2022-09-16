import React from 'react'
import AddTransaction from '../components/AddTransaction'
import Header from '../components/Header'
import ShowBalance from '../components/ShowBalance'
import TransactionList from '../components/TransactionList'

const Home = () => {
  return (
    <div>
        <Header />
        <AddTransaction />
        <ShowBalance />
        <TransactionList />
    </div>
  )
}

export default Home