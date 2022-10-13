import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import TransactionFinder from '../apis/TransactionFinder';
import { TransactionsContext } from '../context/TransactionsContext';
import { TransactionsContextCopy } from '../context/TransactionsContextCopy';
import ShowBalance from './ShowBalance';
import { BalanceContext } from '../context/BalanceContext.js';


const AddTransaction = () => {
    const {addTransactions} = useContext(TransactionsContext); // might go inside if true block
    const {addTransactionsExp} = useContext(TransactionsContextCopy); // might go inside else block

    const { fetchDataBalance } = useContext(BalanceContext);

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [day, setDay] = useState("");
    const [category, setCategory] = useState("Select Category");
    const [isincome, setIsIncome] = useState("Income/Expense");
    const handleSubmit = async (e) => {
        if (isincome == "t") {
        e.preventDefault();
        try {
            console.log("true");  
            const response = await TransactionFinder.post("/", {
                name,
                amount,
                day,
                category,
                isincome,
                user_id: 1
            });
            addTransactions(response.data.data.transaction);
            console.log(response);
            fetchDataBalance();
        } catch (err) {
            console.log(err);
        }
    } else {
        // add expense
        e.preventDefault();
        console.log("false");   
        try {
            const response = await TransactionFinder.post("/", {
                name,
                amount,
                day,
                category,
                isincome,
                user_id: 1
            });
            addTransactionsExp(response.data.data.transaction);
            console.log(response);
            fetchDataBalance();
        } catch (err) {
        }
    }
    }
    return (
    <div className='mb-4'>  
        <form action="">
            <div className="form-group row">
                <div className="col">
                    <input type="text" value={name} onChange={e => setName(e.target.value)} className='form-control' placeholder='name'/>
                </div>
                <div className="col">
                    <input type="number" value={amount} onChange={e => setAmount(e.target.value)} className='form-control' placeholder='amount'/>
                </div>
                <div className="col">
                    <input type="date" value={day} onChange={e => setDay(e.target.value)} className='form-control' placeholder='date'/>
                </div>
                <div className="col">
                    <select value={category} onChange={e => setCategory(e.target.value)} className='custom-select my-1 mr-sm-5'>
                        <option disabled>Select Category</option>
                        <option value="salary">Salary</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="education">Education</option>
                        <option value="food">Food</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="shopping">Shopping</option>
                        <option value="car">Car</option>
                        <option value="transport">Transport</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="col">
                    <select value={isincome} onChange={e => setIsIncome(e.target.value)} className='custom-select my-1 mr-sm-5'>
                        <option disabled>Income/Expense</option>
                        <option value='t'>Income</option>
                        <option value="false">Expense</option>
                    </select>
                </div>
                <br /> <br />
                <button onClick={handleSubmit} type='submit' className="btn btn-primary ms-4">Add</button>
            </div>
        </form>
    </div>
  )
}

export default AddTransaction