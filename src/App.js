import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

//----------------------------------------------------------------------------
// function App() {
//   const products=[
//     {Name: 'Leptop', Price: 50000},
//     {Name: 'Mobile', Price: 15000},
//     {Name: 'Watch', Price: 2500},
//     {Name: 'Tab', Price: 35000}
//   ]
//   return (
//     <div className="App">
//       {/* <Products Name='Leptp' Price='50000'> </Products>
//       <Products Name='Phone' Price='40000'> </Products>
//       <Products Name='Watch' Price='5000'> </Products> */}

//       {
//         products.map(product => <Products Name={product.Name} Price={product.Price}></Products>)
//       }
//     </div>
//   );
// }
// function Products(props){
//   return(
//     <div className='products'>
//     <h2>Name: {props.Name}</h2>
//     <p>Price: {props.Price}</p>
//   </div>
//   )
// }
// export default App;
// -----------------------------------------------------------------------------------------------------------

function App(){

  return(
    <div className='App'>
        {/* <Counter></Counter> */}
        <ExternalUsers></ExternalUsers>
        
    </div>
  );
}
//-------------------------------------------------------------------
//-----Load dynamic data, API call useEffect integrate state-----
//--------------------------------------------------------------------
function ExternalUsers(){
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])

  return(
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User> )
      }
    </div>
  )
}
function User(props){
  return(
    <div style={{border: '2px solid blue', margin: '20px'}}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}
//--------------------------------------------------------------------
function Counter(){
  const [count, setCount] = useState(55);
  
  // 1st way---------------
  // const increaseCount =() =>{
  //   const newCount = count+1;
  //   setCount(newCount)
  // } 
  // 2nd way---------
  const increaseCount =() =>{
    // const newCount = count+1;
    setCount(count+1)
  } 
  const decreaseCount=()=>{
    setCount(count-1);
  }
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>

      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default App;