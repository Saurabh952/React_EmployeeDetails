import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom';

export default function Update() {
    const navigate=useNavigate()
   
    const [id,setid]=useState(0);
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    useEffect(()=>{
        setid(localStorage.getItem("id"))
        setname(localStorage.getItem("name"))
        setemail(localStorage.getItem("email"))
    })

    const handleUpdate=(e)=>{
        e.preventDefault();
        axios.put(`https://64e455eac55563802913066c.mockapi.io/api/endpoint/create/${id}`,
        {
                name:name,
                email:email
                 

             
        }).then(()=>{
            navigate("/read")
        })
    }
  return (
    <>
    <h2>Update</h2>
    <form>
    <div className="mb-3">
   <label   className="form-label">Name</label>
   <input type="text" value={name} className="form-control"  
   onChange={(e)=> setname(e.target.value)}
   />
 </div>
 <div className="mb-3">
   <label   className="form-label">Email address</label>
   <input type="email" value={email} className="form-control"   aria-describedby="emailHelp"
   onChange={(e)=> setemail(e.target.value)}
   />
     
 </div>
 
 <div className="d-flex justify-content-between m-2">
 <button type="submit" className="btn btn-primary"  onClick={handleUpdate}>Update</button>
 <Link to="/read">
     <button className="btn btn-primary">Back</button>
     </Link>
     </div>
</form>
    </>
  )
}
