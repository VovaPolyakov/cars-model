import React from 'react'
import cars from '../../cars'
import { useState } from 'react'
import ShowWindow from '../ShowWindow/ShowWindow'


const Table = () => {
    const [show,setShow] = useState({
        id: true,
        make:true,
        model:true,
        year:true,
        price:true,
    })
    const handleClick = (e) => {
        setShow({
            ...show,
            [e.target.name]: !show[e.target.name]
        })
    }
    return (
        <div className='flex w-full'>
            <ShowWindow onChange={handleClick}/>
             <table className='border-4 border-black m-auto w-3/5'>
                <tr className=' border-2'>
                    {show.id && <th className=' border-2'>ID</th>}
                    {show.make && <th className=' border-2'>Make</th>}
                    {show.model && <th className=' border-2'>Model</th>}
                    {show.year && <th className=' border-2'>Year</th>}
                    {show.price && <th className=' border-2'>Price</th>}
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
        </div>
  )
}

export default Table
