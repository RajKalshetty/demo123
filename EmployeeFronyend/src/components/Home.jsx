import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'

const Home = () => {

    const[data,setdata]=useState([])
    const navigate=useNavigate()


    const getData=async()=>{
      try{
        const {data}=  await axios.get("http://localhost:3002/employees")
        setdata(data)
      }catch(err){
        console.log(err)
      }
    }

    useEffect(()=>{
        getData()
    })
    
const handleDelete=async(id)=>{
 try{
    await axios.delete(`http://localhost:3002/employee/employee/${id}`)
 }catch(err){
console.log(err)
 }  
}


  return (
    <div>

        <Link to={`/addemp`}>
        <button>Add Employee</button>
        </Link>
        <br />
        <br />
    
<table border="2">
        <thead>
            <tr>
                <th>Empid</th>
                <th>Ename</th>
                <th>Sal</th>
                <th>Functionality</th>
            </tr>
        </thead>
        <tbody>
           {data.map((e)=>(<tr  key={e.empid}>
            <td >{e.empid}</td>
            <td >{e.ename}</td>
            <td >{e.sal}</td>
            <td>
            <button onClick={()=>handleDelete(e.empid)}>Delete</button> 
            <Link to={`/update/${e.empid}`}>
        <button>Update</button>
    </Link>
            </td>

           </tr>))}
        </tbody>
      </table>
</div>
  )
}



export default Home
