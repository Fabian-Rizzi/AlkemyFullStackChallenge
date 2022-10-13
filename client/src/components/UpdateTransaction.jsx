import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import TransactionFinder from '../apis/TransactionFinder';
import { TransactionsContext } from '../context/TransactionsContext';

const UpdateTransaction = (props) => {
    const { id } = useParams();
    let navigate = useNavigate();
    // const { transactions } = useContext(TransactionsContext); 
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [day, setDay] = useState("");
    const [category, setCategory] = useState("Select Category");
    const [isincome, setIsIncome] = useState("Income/Expense");
    const fetchData = async () => {
        const response = await TransactionFinder.get(`/${id}`);

        

        const dateTime = response.data.data.transactions.day;                

        function formatDate(date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();
        
            if (month.length < 2) 
                month = '0' + month;
            if (day.length < 2) 
                day = '0' + day;
        
            return [year, month, day].join('-');
        }

        console.log(formatDate(dateTime));
        setName(response.data.data.transactions.name);
        setAmount(response.data.data.transactions.amount);
        setDay(formatDate(dateTime));
        setCategory(response.data.data.transactions.category);
        setIsIncome(response.data.data.transactions.isincome);
    };

        useEffect(() => {

            fetchData();
        }, []);

        const goBack = () => {
navigate("/");
        }

        

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
            const updatedTransaction = await TransactionFinder.put(`/${id}`, {
                name,
                amount,
                day,
                isincome,
                category,
                user_id: 1
            });
            navigate("/");
        } catch (err) {
            console.log(err);
        }};

  return (
    <div>
        <form action="">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input value={name} onChange={e => setName(e.target.value)} type="text" id='name' className='form-control'/>
            </div>
            <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input value={amount} onChange={e => setAmount(e.target.value)} type="number" id='amount' className='form-control'/>
            </div>
            <div className="form-group">
                <label htmlFor="day">Day</label>
                <input value={day} onChange={e => setDay(e.target.value)} type="date" id='day' className='form-control'/>
            </div>
            <div className="col">
            <label htmlFor="category">Category:</label>
            
                    <select value={category} onChange={e => setCategory(e.target.value)} id='category' className='custom-select my-1 mr-sm-5'>
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
                <label htmlFor="isincome">Type:</label>
                    <select value={isincome} onChange={e => setIsIncome(e.target.value)} id='type' className='custom-select my-1 mr-sm-5'>
                        <option disabled>Income/Expense</option>
                        <option value='t'>Income</option>
                        <option value="false">Expense</option>
                    </select>
                </div>
                <button type='submit' onClick={handleSubmit} className='btn btn-primary'>Submit</button>&#160;
                <button onClick={goBack} className='btn btn-primary'>Back</button>
        </form>
    </div>
  )
}

export default UpdateTransaction

