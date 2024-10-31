import { useEffect, useState } from "react";


const StateForm = () => {
    const [name,setName]=useState(null)
    const [email,setEmail]=useState(null)
    const [password,setPassword]=useState(null)
    const [error,setError]=useState(null)
    const handleForm=e=>{
       
        e.preventDefault()
        if(password.length<6){
           setError('Password must be 6 characters of longer') 
        }
        else{
            setError('')
            console.log(name,email,password)
        }
    }
    const handleNameChange=(e)=>{
        setName(e.target.value)
    }
    const handleEmailChange=e=>{
        setEmail(e.target.value)
    }
    const handlePasswordChange=e=>{
        setPassword(e.target.value)
    }
 
  
    return (
        <div>
        <form onSubmit={handleForm} >
            <input onChange={handleNameChange} type="text" name="text" />
            <br />
            <input onChange={handleEmailChange} type="email" name="email" id="" />
            <br />
            <input onChange={handlePasswordChange} type="password" name="phone" />
            <br />
        <input type="submit" value="Submit" />
        <br />
       {
        error &&<p>{error}</p>
       }
        
        </form>
    </div>
    );
};

export default StateForm;