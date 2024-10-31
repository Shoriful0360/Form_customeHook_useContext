


import useInputState from './useInputForm';


const HookForm = () => {
    // const [name,handleNameChange]=useInputState(null)
    // for return object
    const nameState=useInputState(null)
    const handleForm=(e)=>{
        e.preventDefault();
        // console.log(name)
        console.log(nameState.value)
    }
    return (
        <div>
             <form onSubmit={handleForm} >
                {/* <input onChange={handleNameChange} type="text" name="text" />
                <br /> */}
                <input {...nameState} type="text" name="email" id="" />
                <br />
                <input type="text" name="phone" />
                <br />
            <input type="submit" value="Submit" />
            <br />
           
            
            </form>
        </div>
    );
};

export default HookForm;