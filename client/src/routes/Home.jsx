import React from 'react'
import AddTransaction from '../components/AddTransaction'
import Header from '../components/Header'
import ShowBalance from '../components/ShowBalance'
import TransactionList from '../components/TransactionList'
import TransactionListCopy from '../components/TransactionListCopy'
import { balance } from '../components/ShowBalance';

const Home = () => {
  return (
    <div>
        <Header />
        <AddTransaction />
        <ShowBalance />
        <TransactionList />
        <TransactionListCopy />
    </div>
  )
}

export default Home 