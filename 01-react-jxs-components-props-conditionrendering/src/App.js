import './App.css';
import Customer from './Components/Customer';
import Employee from './Components/Employee';
import Counter from './Components/Counter';
import { useState } from 'react';

function App() {

  const[totalClick,setTotalClick] = useState(0)

const empList = [
  {id:1,empName: 'Sumit Kumar', empSalary: 10000, empAge: 20,country:'US'},
  {id:2,empName: 'Suraj Kumar', empSalary: 20000, empAge: 30,country:'US'},
  {id:3,empName: 'Durgesh Kumar', empSalary: 30000, empAge: 52,country:'US'},
  {id:4,empName: 'Saurabh Kumar', empSalary: 40000, empAge: 50,country:'IND'},
  {id:5,empName: 'Chetna Hullur', empSalary: 50000, empAge: 60,country:'IND'},
  {id:6,empName: 'Akash Kumar', empSalary: 60000, empAge: 55,country:'CA'},
  {id:7,empName: 'Amit Kumar', empSalary: 70000, empAge: 45,country:'CA'}]

  let custName = 'Sumit Kumar Mandal';
  let custAge = 31;

  const updateTotalClick = (data)=>{
  setTotalClick(data)
  }

  return (

    <div className='App'>
      <h1> This is App.js </h1> 
      {/* passing one items a time using props */}
      <Customer name={custName} age={custAge} /> 
      {/* passing pointer i.e method name so that it can be accessable from child components */}
      <Counter getTotalCountFromChild={updateTotalClick}/>
      <h2> Total number of clicked {totalClick}</h2>
      {/* passing list of items  using map to props */}

      <Employee empList = {empList}/>
    </div>

  );
}

export default App;
