import React from 'react'
import './ExpenseItem.css'

export default function ExpenseItem(props) {
  return (
    <div className='expense-item'>
      <div className='expense-item_description'>
        <h2>{props.title}</h2>
        <div className='expense-item_price'>${props.amount}</div>
      </div>
    </div>
  )
}
