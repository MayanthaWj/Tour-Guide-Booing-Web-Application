import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/home" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">ආයුබෝවන් Sri Lanka</span>
        </Link>
        </div>
      <div style={{flexDirection: "row", display:"flex", marginTop:"10px"}}>
        {user ? (
          ""
        ) : (
          <Link
            to="/register"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <div className="navItems">
              <button className="navButton" style={{backgroundColor:"black",borderRadius:"5px",color:"white",padding:"6px 15px"}}>Register</button>
            </div>
          </Link>
        )}
        {user ? (
          <span className="logo" style={{color:"white"}}>{user.username}</span>
        ) : (
          <Link
            to="/login"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <div className="navItems">
              <button className="navButton" style={{backgroundColor:"black",borderRadius:"5px",color:"white",padding:"6px 15px"}}>Login</button>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
