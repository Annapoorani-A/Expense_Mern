// import React, { useState } from 'react'
// import { v4 as uid } from "uuid";
// import ExpenseForm from './ExpenseForm'
//   const EXPENSES=[
//     {
//     id: uid(),
//     title:"Expense 1",
//     amount: 100,
//     },
//     {
//       id:uid(),
//       title:"Expense 2",
//       amount: -200,
//     },
//   ];
//   export default function ExpenseTrack() {
//     const[expenses,setExpenses]=useState(EXPENSES);
//     const addExpenses=(title,amount)=>{
//       setExpenses([
//         ...EXPENSES,
//         {
//           id:uid(),
//           title,
//           amount:Number(amount),//make sure it's a number
//         },
//       ]);
//     };
//   return (
//     <div>ExpenseTrack
//         <ExpenseForm addExpense={addExpenses}/>
//         {expenses.map((expense)=>(
//           <li key={expense.id}>
//             <strong>{expense.title}</strong>:${expense.amount}
//           </li>
//         ))}
//     </div>
//   )
// }
import React, { useEffect, useState } from 'react'
import { v4 as uid } from "uuid";
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import ExpenseSummary from './ExpenseSummary';
import axios from 'axios';
  const EXPENSES=[
    {
    id: uid(),
    title:"Expense 1",
    amount: 100,
    },
    {
      id:uid(),
      title:"Expense 2",
      amount: -200,
    },
  ];
  export default function ExpenseTrack() {
    const[expenses,setExpenses]=useState(EXPENSES);
    const[edit,setEdit]=useState(null);
    console.log(axios.get('https://expense-mern-rhlp.onrender.com'))
    useEffect(()=>{
      axios.get('https://expense-mern-rhlp.onrender.com')
      .then((res)=>setExpenses(res.data))
      .catch((err)=>console.error("Fetch error:",err))
    },[])
    const addExpenses=(title,amount,id=null)=>{
      if(id){
        axios.put(`https://expense-mern-rhlp.onrender.com/${id}`,{title,amount:Number(amount)})
         .then((res) => {
          const updated = expenses.map((ex) =>
            ex._id === id ? res.data : ex
          );
        //const updated=expenses.map((exp)=>exp.id===id?{...exp,title,amount:Number(amount)}:exp);
      setExpenses(updated);
      setEdit(null);
      })
      .catch((err)=>console.error("Update error",err));
    } 
      else{
      //   setExpenses([
      //   ...expenses,
      //   {
      //     id:uid(),
      //     title,
      //     amount:Number(amount),//make sure it's a number
      //   },
      // ]);
      axios.post("https://expense-mern-rhlp.onrender.com",{title,amount:Number(amount)})
      .then((res)=>setExpenses([...expenses,res.data]))
      .catch((err)=>console.error("Add Error",err));
    }
    };
    const deleteid=(id)=>{
      // const updateddelete=expenses.filter((exp)=>exp.id!==id)
      // setExpenses(updateddelete)
      axios.delete(`https://expense-mern-rhlp.onrender.com/${id}`)
      .then(()=>setExpenses(expenses.filter((expense)=>expense._id!==id)))
      .catch((err)=>console.error("Delete Err:",err));
    }
  return (
    <div>ExpenseTrack
        <ExpenseForm addExpense={addExpenses} edit={edit}/>
      <ExpenseList testing={expenses} deleteExpense={deleteid} editExpense={setEdit}/>
      <ExpenseSummary summary={expenses}/>
    </div>
  );
}