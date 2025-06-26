import React, { useState,useEffect } from 'react'

export default function ExpenseForm(props) {
    const[title,setTitle]=useState('');
    const[amount,setAmount]=useState('');
     const[error,setError]=useState("");
     useEffect(()=>{
      if(props.edit){
        setTitle(props.edit.title);
        setAmount(props.edit.amount.toString());
      } else{
        setTitle('');
        setAmount('');
      }
     },[props.edit]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!title){
          setError("Please enter the title");
          return;
        }
        if(!amount){
          setError("Please enter the Amount");
          return;
        }
    setError('')
    props.addExpense(title,amount,props.edit?._id);
    setTitle('');
    setAmount('');
      }
  return (
    <div>
        <form onSubmit={handleSubmit}>
          {error && <div>{error}</div>}
            <label htmlFor="title">Title</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />
            <br></br>
            <br></br>
            <label htmlFor="amount">Amount($)</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
            />
            <br></br>
            <br></br>
            <button type="submit">
              {props.edit?"Update Expense" : "Add Expense"}</button>
              {props.edit && (<button type="button" onClick={()=>{props.setEdit(null);
                setTitle('');
                setAmount('');
              }}> Cancel</button>)}
        </form>
    </div>
  )
}
