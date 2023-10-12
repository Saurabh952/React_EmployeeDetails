import React, { useState } from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom';

export default function Create(){
    const history=useNavigate()
    const header={"Access-Control-Allow-Orgin": "*"};

    const[name,setname]=useState("")
    const[email,setemail]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Clickd")
            
            axios.post("https://64e455eac55563802913066c.mockapi.io/api/endpoint/create",{
                name:name,
                email:email,
                header,

             
        })

        .then(()=>{
            history("/read")
        })
        
    }
  return (
     <>
     <div className="d-flex justify-content-between m-2">
     <h2>Create</h2>
     <Link to="/read">
     <button className="btn btn-primary">Show Data</button>
     </Link>
     </div>
     <form>
     <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputPassword1"
    onChange={(e)=> setname(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    onChange={(e)=> setemail(e.target.value)}
    />
      
  </div>
  
 
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
     </>
  )
}
