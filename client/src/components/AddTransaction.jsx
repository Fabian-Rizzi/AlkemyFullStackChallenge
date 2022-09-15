import React from 'react'

const AddTransaction = () => {
  return (
    <div className='mb-4'>
        <form action="">
            <div className="form-group row">
                <div className="col">
                    <input type="text" className='form-control' placeholder='name'/>
                </div>
                <div className="col">
                    <input type="number" className='form-control' placeholder='amount'/>
                </div>
                <div className="col">
                    <select className='custom-select my-1 mr-sm-5'>
                        <option disabled>Type</option>
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