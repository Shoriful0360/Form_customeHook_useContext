


const SingleForm = () => {
    const handleForm=(e) =>{
       e.preventDefault();
        console.log(e.target.text.value)
        console.log(e.target.email.value)
        console.log(e.target.phone.value)
    }
    return (
       
        <div>
            <form onSubmit={handleForm} >
                <input type="text" name="text" />
                <br />
                <input type="text" name="email" id="" />
                <br />
                <input type="text" name="phone" />
                <br />
            <input type="submit" value="Submit" />
            <br />
           
            
            </form>
        </div>
    );
};

export default SingleForm;