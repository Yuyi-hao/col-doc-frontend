import UserAuthForm from "../../components/user_auth"

function LoginForm(){
    return <UserAuthForm route="/accounts/login/" method="login" />
}

export default LoginForm;