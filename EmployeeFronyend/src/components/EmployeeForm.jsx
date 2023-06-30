import React, { useState,useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'


const EmployeeForm = () => {

    const[info,setInfo]=useState({empid:'',ename:'',sal:0})
    const navigate=useNavigate()


    const handleCreate=async()=>{
        try{
            await axios.post(`http://localhost:3002/employee/employee/${info.empid}`,info)
            navigate("/")
        
        }catch(err){
            console.log(err)
        }
        }

  return (
    <div>
      

      <input type="text" name='emipid' id='empid' value={info.empid}  onChange={(e)=>setInfo({...info,empid:e.target.value})} placeholder='Enter Employee id'/> <br />
    <input type="text" name='ename' id='ename' value={info.ename} onChange={(e)=>setInfo({...info,ename:e.target.value})} placeholder='Enter name' /> <br />
    <input type="text" name='sal' id='sal' value={info.sal} onChange={(e)=>setInfo({...info,sal:e.target.value})} placeholder='Enter salary' /> <br />

    <button onClick={handleCreate}>Add Employee</button>

    </div>
  )
}

export default EmployeeForm
