import React, { useState,useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'


const UpdateForm = () => {
const[info,setInfo]=useState({empid:'',ename:'',sal:0})
const params=useParams()
const navigate=useNavigate()



const getData=async()=>{
    await axios.get(`http://localhost:3002/employees/employee/${params.id}`)
    .then(({data})=>{
        setInfo(data)
        console.log(data.empid)
    })
    .catch((err)=>{console.log(err)})
}

useEffect(()=>{
  
    getData()
    console.log("data "+ info)
},[])

const handleUpdate=async()=>{
try{
    await axios.put(`http://localhost:3002/employee/employee/${info.empid}`,info)
    navigate("/")

}catch(err){
    console.log(err)
}
}

  return (
    <div>

    <input type="text" name='emipid' id='empid' value={info.empid}  disabled /> <br />
    <input type="text" name='ename' id='ename' value={info.ename} onChange={(e)=>setInfo({...info,ename:e.target.value})} /> <br />
    <input type="text" name='sal' id='sal' value={info.sal} onChange={(e)=>setInfo({...info,sal:e.target.value})} /> <br />

    <button onClick={handleUpdate}>Update Employee</button>
      
    </div>
  )
}

export default UpdateForm
