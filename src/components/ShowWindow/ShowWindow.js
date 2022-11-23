import React from 'react'

const ShowWindow = ({onChange}) => {
  return (
    <div className=' ml-6'>
         <div className='flex mb-3'>
            <input name='id' onChange={onChange} className='mr-2' type='checkbox'></input>
            <p>Show/hide 'ID' column</p>
        </div>
        <div className='flex mb-3'>
            <input name='make' onChange={onChange} className='mr-2' type='checkbox'></input>
            <p>Show/hide 'Make' column</p>
        </div>
        <div className='flex mb-3'>
            <input name='model' onChange={onChange} className='mr-2' type='checkbox'></input>
            <p>Show/hide 'Model' column</p>
        </div>
        <div className='flex mb-3'>
            <input name='year' onChange={onChange} type='checkbox' className='mr-2'></input>
            <p>Show/hide 'Year' column</p>
        </div>
        <div className='flex mb-3'>
            <input name='price' onChange={onChange} className='mr-2' type='checkbox'></input>
            <p>Show/hide 'Price' column</p>
        </div>
    </div>
  )
}

export default ShowWindow
