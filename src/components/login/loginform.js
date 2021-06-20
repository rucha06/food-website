// import React, { Component } from 'react'
// import React, { useState} from 'react'
// import axxios from "axios;" 


// const loginn=()=>
// {  
//     const[input,setInput]=useState({
      
//         fullName:'',
//         username:'',
//         email:'',
//         password:''
//     })

//     function handleChange(event){

//         const{name,value}=event.target;

//         setInput(prevInput =>{
//             return{
//                 ...prevInput,
//                 [name]:value 
//             }
//         })
//     }

//     function handleClick(event){
//         event.preventDefault();
//         const signedUpUser = {
//             fullName:input.fullName,
//             username:input.username,
//            email:input.email,
//            password:input.password


//         }

//         axios.post('http://localhost:4000/app/signup',signedUpUser)
//     }
//         return (
//             <div>
//                 <input onChange={handleChange}  name ="fullName" value = {input.fullNamel} placeholder="enter fulLName "type="text"></input><br/><br/>
//                 <input onChange={handleChange}  name ="username" value = {input.username} placeholder="enter username "type="text"></input><br/><br/>
//                 <input onChange={handleChange}  name ="email" value = {input.email} placeholder="enter email "type="text"></input><br/><br/>
//                 <input  onChange={handleChange}  name = "password" value= {input.password} placeholder="enter password"type="password"></input><br/><br/>
//                {/* <button onClick={handleClick}  className="btn btn-lg btn-info">Registration</button> */}
//                 <button  onclick={()=>this.loginn}>Login</button>
//             </div>
//         )
    
// }
// export default loginn;
