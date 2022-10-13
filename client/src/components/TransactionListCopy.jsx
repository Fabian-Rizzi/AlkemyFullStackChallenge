import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import TransactionFinder from '../apis/TransactionFinder';
import { TransactionsContextCopy } from '../context/TransactionsContextCopy';
import { BalanceContext } from '../context/BalanceContext.js';

const TransactionListCopy = (props) => {
    const {transactionsExp, setTransactionsExp} = useContext(TransactionsContextCopy);
    let navigate = useNavigate();
    const { fetchDataBalance } = useContext(BalanceContext);
    useEffect( ()  => {
        const fetchDataExp = async () =>{
        try {
            const response = await TransactionFinder.get("/expenses");
            setTransactionsExp(response.data.data.transactions)
        } catch (err)
        {
            console.log(err);
        }
        };
        fetchDataExp();
    },[]);

    const handleDelete = async (id) => {
        try{
            const response = await TransactionFinder.delete(`/${id}`);
            setTransactionsExp(transactionsExp.filter((transactionExp) => {
                return transactionExp.id !== id
            }))
            fetchDataBalance();
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }
    const handleUpdate = (id) => {
        // e.stopPropagation();
        navigate(`/transactions/${id}/update`);

    };


    //transforms date into sql format (YYYY-MM-DD)
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
                {transactionsExp && transactionsExp.map(transactionExp => {
                    return (
                    <tr key={transactionExp.id}>
                        <td>{transactionExp.name}</td>
                        <td>{transactionExp.amount}</td>
                        <td>{formatDate(transactionExp.day)}</td>
                        <td>{String(transactionExp.isincome)}</td>
                        <td>{transactionExp.category}</td>
                        <td><button onClick={() => handleUpdate(transactionExp.id)} className="btn btn-warning">Update</button></td>
                        <td><button onClick={() => handleDelete(transactionExp.id)} className="btn btn-danger">Delete</button></td>
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
export default TransactionListCopy