import UserAuthForm from "../../components/user_auth"

function SignupForm(){
    return <UserAuthForm route="/accounts/register/" method="register" />
}

export default SignupForm;