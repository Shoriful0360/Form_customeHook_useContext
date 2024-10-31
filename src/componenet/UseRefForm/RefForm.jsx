import { useEffect, useRef, useState } from "react";


const RefForm = () => {
    const nameRef=useRef(null)
    const emailRef=useRef(null)
    const passwordRef=useRef(null)
    const [error,setError]=useState(null)
    const handleForm=(e)=>{
        e.preventDefault()
        if(passwordRef.current.value.length<6){
            setError('your password maximum is six character')
        }
        else{
            setError('')
            console.log(nameRef.current.value)
            console.log(emailRef.current.value)
            console.log(passwordRef.current.value)
        }

    }
    useEffect(()=>{
        nameRef.current.focus()
    },[])
    return (
        <div>
              <form onSubmit={handleForm} >
            <input ref={nameRef} type="text" name="text" />
            <br />
            <input ref={emailRef} defaultValue={'shorifulIslam@gmail.com'} type="email" name="email" id="" />
            <br />
            <input ref={passwordRef} type="password" name="password" />
            <br />
        <input type="submit" value="Submit" />
        <br />
        {
            error&&<p>{error}</p>
        }
      
        </form>
        </div>
    );
};

export default RefForm;