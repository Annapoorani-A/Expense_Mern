// import React from 'react'

// export default function ExpenseList(props) {
//   return (
//     <div>{props.testing.map((expense)=>(
//           <li key={expense.id}>
//             <strong>{expense.title}</strong>:${expense.amount}
//              &nbsp;&nbsp;
//             <button onClick={()=>console.log(expense.id)}>Delete</button>
//             &nbsp;&nbsp;
//           </li>
//         ))}</div>
//   )
// }

import React from 'react'

export default function ExpenseList(props) {
  return (
    <div>{props.testing.map((expense)=>(
          <li key={expense.id}>
            <strong>{expense.title}</strong>:${expense.amount}
             &nbsp;&nbsp;
            <button onClick={()=>props.deleteExpense(expense._id)}>Delete</button> &nbsp;&nbsp;
            <button onClick={()=>props.editExpense(expense)}>Edit</button>
            &nbsp;&nbsp;
          </li>
        ))}</div>
  )
}
