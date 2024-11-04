// import { useState } from 'react'
import {React,useState} from 'react'
import './Section.css'

const Section = () => {

  const data={username:"",email:"",mobile:"",password:"",conpassword:""}
  const [user,setUser] =useState(data)
  const [err,setErr]=useState({})
  const [flag,setFlag]=useState(false)
  const [color,setColor]=useState('red')

  const changehandel=(e)=>{
    // console.log(e.target.value)
    setUser({...user,[e.target.name]:e.target.value})
    console.log(e)
  }
const submitform=(e)=>{
  e.preventDefault()
  console.log(e)

  const updateErr={}

//  if(user.username == ""){
 if(!user.username){
    updateErr.username ="please enter the username"
 }
 else if(user.username.length <8){
  updateErr.username ="user name should be 8 characters"
 }
 if(user.email == ""){
    updateErr.email ="please enter the email"
 }
 if(user.mobile == ""){
    updateErr.mobile ="please enter the mobile no"
 }
 else if(isNaN(user.mobile)){
  updateErr.mobile='enter only numbers'
 }
 if(user.password == ""){
    updateErr.password ="please enter the password"
 }
 else if(user.password.length<8){
    updateErr.password ="password must be 8 digits"
    setColor('yellow')
 }
 if(user.conpassword == ""){
    updateErr.conpassword ="please enter the confirm password"
   }
   else if(user.password != user.conpassword){
    updateErr.conpassword ="password not match !"
    // setColor('blue')
   }
 else{
  setFlag(true)
 }
 setErr(updateErr)
}


  return (
    <>
      <p className="read-the-docs">form validation</p>
      <h3 style={{color:'white',textAlign:'center',letterSpacing:'2px'}}>{flag?<p style={{color:'white',fontSize:"11px",textTransform:'uppercase'}}><span id='output'>{user.username} </span> registered successfully</p>:""}</h3>
      <div className="form-container">
        <h2 className="form-title"><span>Face</span>book</h2>
        <form onSubmit={submitform}>
        <input type="text" name="username" placeholder='username' onChange={changehandel}></input>
        <p className='error'>{err.username}</p>
        <input type="text" id="e" name="email" placeholder='email' onChange={changehandel}></input>
        <p className='error'>{err.email}</p>
        <input type="text" id="m" name="mobile" placeholder='mobile no' onChange={changehandel}></input>
        <p className='error'>{err.mobile}</p>
        <input  type="text" id="p" name="password" placeholder='password' onChange={changehandel}></input>
        <p style={{color:color}} className='error'>{err.password}</p>
        <input type="text" id="cp" name="conpassword" placeholder='conform password' onChange={changehandel}></input>
        <p className='error'>{err.conpassword}</p>

          <input type="submit" name="submit" value='submit' className="submit"></input>
        </form>
      </div>
    </>
  )
}

export default Section
