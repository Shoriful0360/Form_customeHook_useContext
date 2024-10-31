





const ReuseableForm = ({formTitle,submitBtn,handleSubmit,children }) => {
    const handleLocalSubmit=(e)=>{
        e.preventDefault()
        const data={
            name: e.target.text.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data)
    }
    return (
        <div>
           {children}
              <form onSubmit={handleLocalSubmit} >
                <input type="text" name="text" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" />
                <br />
            <input type="submit" value={submitBtn} />
            <br />
           
            
            </form> 
        </div>
    );
};

export default ReuseableForm;