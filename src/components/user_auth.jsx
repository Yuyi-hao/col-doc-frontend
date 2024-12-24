function UserAuthForm({route, method}){
    const formName = method === 'login' ? "Login": "Signup";
    function handleFormSubmission(){
        console.log("form has submitted");
    }
    return (
        <form onSubmit={handleFormSubmission}>
            <h1>{formName}</h1>
            <input type="email" name="email" id="email" placeholder="user@email.com"/>
            {(method==="register")?
            <div>
                <input type="text" name="username" id="username" placeholder="Your Name"/> 
                <input type="date" name="date-of-birth" id="date-of-birth" placeholder="YYYY-MM-DD"/>
            </div>:
            <></>}
            <input type="password" name="password" id="password" />
            {(method==="register")? <input type="password" name="confirm_password" id="confirm_password" />: <></>}
            <button type="submit">{formName}</button>
        </form>
    )
}

export default UserAuthForm;