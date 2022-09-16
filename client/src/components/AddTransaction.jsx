import React from 'react'
import { useState } from 'react'

const AddTransaction = () => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("Select Category");
    const [isincome, setIsIncome] = useState("Income/Expense");
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
                    <input type="date" value={date} onChange={e => setDate(e.target.value)} className='form-control' placeholder='date'/>
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
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                </div>
                <button className="btn btn-primary ms-4">Add</button>
            </div>
        </form>
    </div>
  )
}

export default AddTransaction