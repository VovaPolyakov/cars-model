import React from 'react'
import cars from '../../cars'
import { useState } from 'react'

const Table = ({item}) => {
    console.log(item)
    return (
    <table className='border-4 border-black m-auto w-full'>
        <tr className=' border-2'>
            <th className=' border-2'>ID</th>
            <th className=' border-2'>Make</th>
            <th className=' border-2'>Model</th>
            <th className=' border-2'>Year</th>
            <th className=' border-2'>Price</th>
        </tr>
        {cars.map((car) => (
            <tr className=' border-2'>
                <td className=' border-2 p-3'>{car.id}</td>
                <td  className=' border-2'></td>
                <td  className=' border-2'>{car.name}</td>
                <td  className=' border-2'>{car.year}</td>
                <td  className=' border-2'></td>
            </tr>
            ))}
    </table>
  )
}

export default Table
