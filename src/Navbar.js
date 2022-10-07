import Button from 'react-bootstrap/Button';


const Navbar = () => {

    return ( 
        <nav className="navbar">
            <h1 class="fw-bold">Shop.com</h1>
            <div className="links">
                <a href='/info'>Tutorial</a>
                    <Button variant="outline-primary"
                    className="nav-btn"> 
                        Sign In
                    </Button>
                    <Button variant="outline-primary" 
                    className="nav-btn">
                        Log In
                    </Button>

                
            </div>
        </nav>
     );
}
 
export default Navbar;