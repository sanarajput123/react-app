import React from 'react'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

export default function Expenses() {
    return (
        <>
            <h1>Expense Tracker App</h1>
            <div className="expenses">
                <Card>
                    <ExpenseItem title="Books" amount="300" />
                    <ExpenseItem title="Bag" amount="500" />
                    <ExpenseItem title="Pens" amount="150" />
                </Card>
            </div>
        </>
    )
}
