import "./navbar.css"
    
import { Outlet, Link } from "react-router-dom";
        const Navbar = () => {
          return (
          <>
              <div className="navbar">
              <div className="navbarcontainer">
                <span className="logo">Rafon fashions</span>
               
                <ul className="navItems">
                  <li className="navItem">
                    <Link to="/"  className="navText">Shop</Link>
                  </li>
                  <li className="navItem">
                    <Link to="/Cart"  className="navText">Cart</Link>
                  </li>
                 
                </ul>
              </div>
              </div>
              <Outlet/>
            </>
          )
        };
        
        export default Navbar;