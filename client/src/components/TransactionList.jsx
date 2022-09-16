import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import TransactionFinder from '../apis/TransactionFinder';
import { TransactionsContext } from '../context/TransactionsContext';

const TransactionList = (props) => {
    const {transactions, setTransactions} = useContext(TransactionsContext);
    let navigate = useNavigate();

    useEffect( ()  => {
        const fetchData = async () =>{
            
        
        try {
            const response = await TransactionFinder.get("/");
            setTransactions(response.data.data.transactions)
        } catch (err)
        {
            console.log(err);
        }
        };
        fetchData();
    },[]);

    const handleDelete = async (id) => {
        try{
            const response = await TransactionFinder.delete(`/${id}`);
            setTransactions(transactions.filter((transaction) => {
                return transaction.id !== id
            }))
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }

    const handleUpdate = (id) => {
        // e.stopPropagation();
        navigate(`/transactions/${id}/update`);

    };

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

  return (
    <div className='list-group'>
        <table className="table table-hover table-striped">
            <thead className='thead-dark'>
                <tr className="bg-primary">
                    <th scope='col'>Name</th>
                    <th scope='col'>Amount</th>
                    <th scope='col'>Date</th>
                    <th scope='col'>Type</th>
                    <th scope='col'>Category</th>
                    <th scope='col'>Edit</th>
                    <th scope='col'>Delete</th>
                </tr>
            </thead>
            <tbody>
                {transactions && transactions.map(transaction => {
                    return (
                    <tr key={transaction.id}>
                        <td>{transaction.name}</td>
                        <td>{transaction.amount}</td>
                        <td>{formatDate(transaction.day)}</td>
                        <td>{String(transaction.isincome)}</td>
                        <td>{transaction.category}</td>
                        <td><button onClick={() => handleUpdate(transaction.id)} className="btn btn-warning">Update</button></td>
                        <td><button onClick={() => handleDelete(transaction.id)} className="btn btn-danger">Delete</button></td>
                    </tr>
                    )

                })}
                {/* <tr>
                    <td>Nafta</td>
                    <td>1500</td>
                    <td>15/09/22</td>
                    <td>Expense</td>
                    <td>Category</td>
                    <td><button className="btn btn-warning">Update</button></td>
                    <td><button className="btn btn-danger">Delete</button></td>
                </tr>
                <tr>
                    <td>Nafta</td>
                    <td>1500</td>
                    <td>15/09/22</td>
                    <td>Expense</td>
                    <td>Category</td>
                    <td><button className="btn btn-warning">Update</button></td>
                    <td><button className="btn btn-danger">Delete</button></td>
                </tr> */}
            </tbody>
        </table>
    </div>
  )
}

export default TransactionList