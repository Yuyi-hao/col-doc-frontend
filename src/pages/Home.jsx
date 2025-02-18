import NavBar from "../components/navbar";

function Home() {
    return (
        <>
            
            <div className="container-fluid hero-section d-flex justify-content-center align-items-center">
                <div className="text-center">
                    <h1 className="display-3 mb-4">COL DOC</h1>
                    <p className="lead mb-4">A seamless document editing and sharing platform.</p>
                    <div className="d-flex justify-content-center">
                        <a href="/accounts/signup" className="btn btn-primary btn-lg mx-3">Get Started</a>
                        <a href="/accounts/login" className="btn btn-outline-secondary btn-lg mx-3">Login</a>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="row text-center">
                    <div className="col-md-4 mb-4">
                        <h3>Create Documents</h3>
                        <p>Effortlessly create and manage your documents with an intuitive editor.</p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <h3>Share with Others</h3>
                        <p>Collaborate with others by sharing your documents securely and easily.</p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <h3>Organize Your Files</h3>
                        <p>Keep your documents organized and accessible, wherever you are.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
