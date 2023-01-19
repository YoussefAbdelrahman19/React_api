function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light  ">
                <div className="container-fluid">
                    <a className="navbar-brand fs-3 h1 " href="#" style={{ marginLeft: '2vw', color: '#2ECC71', fontWeight: 'bold' }}>HAVS Calculator</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                </div>
            </nav>
        </>
    );

}
export default Navbar;
