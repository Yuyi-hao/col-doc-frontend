import NavBar from "../components/navbar";
function Home(){
    return (
    <div>
        {/* Navbar */}
        <NavBar/>
        <h1>Home</h1>
        
        <a href="/accounts/login">Login</a>
        <a href="/accounts/signup">Signup</a>
        <a href="/accounts/logout">Logout</a>
        <a href="/akdkahdhskj">404</a>
    </div>
    )
}

export default Home;