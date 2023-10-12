import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Read() {
    const [data,setdata]=useState([]);
    const getdata=()=>{
        axios
        .get("https://64e455eac55563802913066c.mockapi.io/api/endpoint/create")
        .then((res) => {
            setdata(res.data)
            console.log(res.data)
        })
    }
useEffect(()=>{
getdata();
},[])

const handleDelete =(id)=>
{
 axios.delete(
    `https://64e455eac55563802913066c.mockapi.io/api/endpoint/create/${id}`)
 .then(()=>{
    getdata();
 });
}

const setToLocalStorage=(id,name,email)=>{
    localStorage.setItem("id",id);
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
}

    
  return (
    <>
    <div className="d-flex justify-content-between m-2">
    <h2>Read Operations</h2>
   <Link to="/">
    <button className='btn btn-primary'>Add Details</button>
    </Link>
    </div>
    <table className="table">
    <thead>
      <tr>
        <th scope="col">Sr.No</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col"></th>
        <th scope="col"></th>
      </tr>
    </thead>
    {
    data.map((eachData)=>{
       return(
        <>
        <tbody>
      <tr>
        <th scope="row">{eachData.id}</th>
        <td>{eachData.name}</td>
        <td>{eachData.email}</td>
        <td>
            <button className='btn btn-success' onClick={()=>
                 setToLocalStorage(eachData.id,eachData.name,eachData.email)
                 }>
            <Link to="/update"> Edit </Link>
            </button></td>
        <td><button className="btn btn-danger" onClick={()=>handleDelete(eachData.id)}>Delete</button></td>
      </tr>
       
    
    </tbody>
    
        </>
       )
    })
    
}

  </table>
  </>
  )
}
