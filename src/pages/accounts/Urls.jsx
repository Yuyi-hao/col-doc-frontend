import { Route, Routes } from "react-router-dom";
import LoginForm from "./Login";
import SignupForm from "./Signup";

function AuthRoutes() {
  return (
    <>
      <Routes>
        <Route path="accounts/login" element={ <LoginForm/>} />
        <Route path="accounts/signup" element={ <SignupForm/> }/>
      </Routes>
    </>
  );
}

export default AuthRoutes;
