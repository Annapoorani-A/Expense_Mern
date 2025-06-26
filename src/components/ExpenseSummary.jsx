import React from 'react'

export default function ExpenseSummary(props) {
    const income=props.summary.filter((e)=>e.amount>0).reduce((acc,cur)=>acc+cur.amount,0)
    const expenseamount=props.summary.filter((e)=>e.amount<0).reduce((acc,cur)=>acc+cur.amount,0)
    const total=income+expenseamount
  return (
    <div>
        Income: {income}
        <br></br>
        Expense:{Math.abs(expenseamount)}
        <br></br>
        Balance:{total}
    </div>
  )
}
