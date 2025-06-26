// import {useState } from "react";
// import Work from "./Work"
// function App() {
//   const [count,setCount]=useState("anu");

//   return (
//     <>
//       <h1>hii {count}</h1>
//       <button onClick={()=>setCount("Anushri")}>click me</button>
//       <Work />
//     </>
//   )
// }

// export default App
// import {useState } from "react";
// import Work from "./Work"
// function App() {
//   const [count,setCount]=useState(0);

//   return (
//     <>
//       <h1>hii {count}</h1>
//       <button onClick={()=>setCount(count+1)}>click me</button>
//       <Work />
//     </>
//   )
// }
// export default App
// 

// import {useState } from "react";
// import Work from "./Work"
// function App() {
//   const [count,setCount]=useState([0,1,2]);

//   return (
//     <>
//       <h1>hii {count}</h1>
//       <button onClick={()=>setCount(count.length)}>click me</button>
//       <Work />
//     </>
//   )
// }
// export default App

// import {useState } from "react";
// import Work from "./Work"
// function App() {
//   const [count,setCount]=useState();

//   return (
//     <>
//       <h1>hii {count}</h1>
//       <button onClick={()=>setCount("hello")}>show</button>
//       <button onClick={()=>setCount("")}>hide</button>

//       <Work />
//     </>
//   )
// }
// export default App
// 

// import { useState } from "react";
// import Work from "./work";
// function App() {
//   const [count, setCount] = useState(0); 
//   return (
//     <>
//       <div>
//       <button onClick={() => setCount(count+1)}>+</button>
//            {count}
//       <button onClick={() => setCount(count-1)}>-</button>
//       <Work />
//       </div>
//     </>
//   );
// }
// export default App;

// import { useState } from "react";
// import Work from "./work";
// function App() {
//   const [count, setCount] = useState(0); 
//   const increase=()=>{
//     setCount(count+1)
//   }
//   const decrease=()=>{
//     setCount(count-1)
//   }
//   return (
//     <>
//       <div>
//       <button onClick={increase}>+</button>
//            {count}
//       <button onClick={decrease}>-</button>
//       <Work />
//       </div>
//     </>
//   );
// }
// export default App;


// import { useState } from "react";
// import Work from "./work";
// function App() {
//   const [c1, setCount1] = useState(0); 
//   const [c2, setCount2] = useState(0); 
//   const [c3, setCount3] = useState(0); 
//   const red=()=>{
//     setCount1(c1+1)
//   }
//   const green=()=>{
//     setCount2(c2+1)
//   }
//    const yellow=()=>{
//     setCount3(c3+1)
//   }
//   return (
//     <>
//       <div>
//       <button onClick={red}>red</button>{c1} <br />
//       <button onClick={yellow}>yellow</button>{c3} <br />
//        <button onClick={green}>green</button>{c2} <br />
//       <Work />
//       </div>
//     </>
//   );
// }
// export default App;


// import { useState } from "react";
// import Work from "./work";
// function App() {
//   const[name,setName]=useState("CSD")
//   return(
//     <>
//     <h1>this {name}</h1>
//     <Work nameprops={name}/>
//     </>
//   )
// }
// export default App;


// import { useState } from "react";
// import Work from "./work";
// function App() {
//   const users=[
//     {id:1,name:'Anu',age:22},
//     {id:2,name:'Arunthathi',age:23},
//     {id:3,name:'Deepa',age:24}
//   ];
//   return(
//     <>
//     <h1>this</h1>
//     <Work nameprops= {users}/>
//     </>
//   )
// }
// export default App;


// import { useState } from "react";
// import Work from "./work";
// function App() {
//  const[name,setName]=useState();
//  const handleName=(e)=>{
//   console.log(e.target)
//  }
//   return(
//     <>
//     <h1>Controlled Inputs</h1>
//     <form>
//     <input type="name" values={name} placeholder="Name" onChange={handleName}></input>

//     </form>
//     </>
//   )
// }
// export default App;


// import { useState } from "react";
// import Work from "./work";
// function App() {
//  const[name,setName]=useState();
//  const handleName=(e)=>{
//   console.log(name)
//   setName(e.target.value)
//  }
//  const handleSubmit=(e)=>{
//   e.preventDefault();
//   console.log("User name is here",name)
//  }
//   return(
//     <>
//     <h1>Controlled Inputs</h1>
//     <form onSubmit={handleSubmit}>
//     <input type="name" values={name} placeholder="Name" onChange={handleName}></input>
//     <br></br>
// <button>Click Me</button>
//     </form>
//     </>
//   )
// }
// export default App;


// import { useState } from "react";
// import Work from "./work";
// function App() {
//  const[name,setName]=useState();
//  const handleName=(e)=>{
//   console.log(name)
//   setName(e.target.value)
//  }
//  const handleSubmit=(e)=>{
//   e.preventDefault();
//   console.log("User name is here",name)
//  }
//   return(
//     <>
//     <h1>Controlled Inputs</h1>
//     <form onSubmit={handleSubmit}>
//     <input type="name" values={name} placeholder="Name" onChange={handleName}></input>
//     <br></br>
// <button>Click Me</button>
//     </form>
//     </>
//   )
// }
// export default App;


// import { useState } from "react";
// import Work from "./work";
// function App() {
//  const productList=['apple','orange','banana','kiwi']
//  const [product,setProduct]=useState(productList)
//    return(
//     <>
//     <form>
//       {/* {
//       product.map(list=>{
//         return <li>{list}</li>
//       })} */}
//       {
//         product.map((l)=>{
//           return <p>{l}</p>
//         })
//       }
//     </form>
//     </>
//   )
// }
// export default App;


// import { useState } from "react";
// import Work from "./work";
// function App() {
//  const productList=['apple','orange','banana','kiwi']
//  const [product,setProduct]=useState(productList)
//  const [search,setSearch]=useState()
//  console.log("The searched value is",search)
//    return(
//     <>
//     <form>
//     <input type="name" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search"/>
//     <button type="submit">Search</button>
//     {
//         product.map((l)=>{
//          return <p>{l}</p>
//        })
//     }
//     </form>
//     </>
//   )
// }
// export default App;


// import { useState } from "react";
// import Work from "./work";
// function App() {
//  const productList=['apple','orange','banana','pineapple']
//  const [product,setProduct]=useState(productList)
//  const [search,setSearch]=useState()
//  console.log("The searched value is",search)
//  const filtered=product.filter((item)=>{
//       return item.includes(search)
//  })
// }
//   console.log(filtered)
//    return(
//     <>
//     <form>
//     <input type="name" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search"/>
//     <button type="submit">Search</button>
//     {
//         product.map((l)=>{
//          return <p>{l}</p>
//        })
//     }
//     </form>
//     </>
//   )
// }
// export default App;

// import { useState } from "react";
// import Work from "./work";
// function App() {
//  const productList=['apple','orange','banana','pineapple']
//  const [product,setProduct]=useState(productList)
//  const [search,setSearch]=useState()
//  console.log("The searched value is",search)
//  const handleSubmit=(e)=>{
//   e.preventDefault();
//  const filtered=product.filter((item)=>{
//       return item.includes(search)
//  })
//   setProduct(filtered)
// }

//    return(
//     <>
//     <form onSubmit={handleSubmit}>
//     <input type="name" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search"/>
//     <button type="submit">Search</button>
//     {
//         product.map((l)=>{
//          return <p>{l}</p>
//        })
//     }
//     </form>
//     </>
//   )
// }
// export default App;

// for both lower anp upper case letters
// import { useState } from "react";
// import Work from "./work";
// function App() {
//  const productList=['apple','orange','banana','pineapple']
//  const [product,setProduct]=useState(productList)
//  const [search,setSearch]=useState()
//  console.log("The searched value is",search)
//  const handleSubmit=(e)=>{
//   e.preventDefault();
//  const filtered=product.filter((item)=>{
//       return item.toLowerCase().includes(search.toLowerCase())
//  })
//   setProduct(filtered)
// }

//    return(
//     <>
//     <form onSubmit={handleSubmit}>
//     <input type="name" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search"/>
//     <button type="submit">Search</button>
//     {
//         product.map((l)=>{
//          return <p>{l}</p>
//        })
//     }
//     </form>
//     </>
//   )
// }
// export default App;


// import { useState } from "react";
// import Work from "./work";
// function App() {
//  const productList=['apple','orange','banana','pineapple']
//  const [product,setProduct]=useState(productList)
//  const[filteredProducts,setFileredProducts]=useState()
//  const [search,setSearch]=useState()
//  console.log("The searched value is",search)
//  const handleSubmit=(e)=>{
//   e.preventDefault();
//  const filtered=product.filter((item)=>{
//       return item.toLowerCase().includes(search.toLowerCase())
//  })
//   setProduct(filtered)
// }

//    return(
//     <>
//     <form onSubmit={handleSubmit}>
//     <input type="name" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search"/>
//     <button type="submit">Search</button>
//     {
//         product.map((l)=>{
//          return <p>{l}</p>
//        })
//     }
//     </form>
//     </>
//   )
// }
// export default App;

// import {useEffect, useState } from "react";
// import Work from "./work";
// function App() {
//  console.log("Render Outside");
//  useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
//  })

//    return(
//     <>
//     <div>
//     </div>
//     </>
//   );
// }
// export default App;


// import {useEffect, useState } from "react";
// import Work from "./work";
// function App() {
//   const [name,setName]=useState("");
//  console.log("Render Outside");
//  useEffect(()=>{
//     fetch(`https://jsonplaceholder.typicode.com/${name}`)
//       .then(response => response.json())
//       .then(json => console.log(json))
//  })

//    return(
//     <>
//     <div>
// <button onClick={()=>setName("albums")}>Albums</button>
// <button onClick={()=>setName("comments")}>Comments</button>
// <button onClick={()=>setName("users")}>Users</button>
// <button onClick={()=>setName("photos")}>Photos</button>
//     </div>
//     </>
//   );
// }
// export default App;


// import {useEffect, useState } from "react";
// import Work from "./work";
// function App() {
//   const [name,setName]=useState("");
//   const [items,setItems]=useState([])
//  console.log("Render Outside");
//  useEffect(()=>{
//     fetch(`https://jsonplaceholder.typicode.com/${name}`)
//       .then(response => response.json())
//       .then(json => setItems(json))
//  },[name])

//    return(
//     <>
//     <div>
// <button onClick={()=>setName("albums")}>Albums</button>
// <button onClick={()=>setName("comments")}>Comments</button>
// <button onClick={()=>setName("users")}>Users</button>
// <button onClick={()=>setName("photos")}>Photos</button>
// {items.map((l)=>(
//   <p key={l.id}>
//     {l.name || l.title || l.body}
//   </p>
// ))}
//     </div>
//     </>
//   );
// }
// export default App;


// import {useState } from "react";
// import Work from "./work";
// function App() {
//   const [password,setPassword]=useState("");
//   const handlePassword=(pwds)=>{
//     setPassword(pwds);
//   }

//    return(
//     <>
//     <div>
// <h1>Parent</h1>
// <Work sendPass={handlePassword} />
// <p>Received Password:{password}</p>
//     </div>
//     </>
//   );
// }
// export default App;


// EXPENSE TRACKER
import React from 'react'
import ExpenseTrack from './components/ExpenseTrack'
import './App.css'
export default function App() {
  return (
    <div><h1>Mini Project</h1>
    <ExpenseTrack/>
    </div>
  )
}
