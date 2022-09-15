import React from 'react'

const TransactionList = () => {
  return (
    <div className='list-group'>
        <table className="table table-hover table-dark">
            <thead>
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
                <tr>
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
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default TransactionList