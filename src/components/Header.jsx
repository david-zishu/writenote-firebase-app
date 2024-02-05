import Logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "../firebase/config";
import { useState } from "react";
const Header = () => {
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("isAuth")) || false
  );

  const handleLogin = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      console.log(result);
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
    });
  };

  const handleLogout = () => {
    signOut(auth);
    setIsAuth(false);
    localStorage.setItem("isAuth", false);
  };

  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Write Note Logo" />
        <span>WriteNote Firebase</span>
      </Link>
      <nav className="nav">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>

        {isAuth ? (
          <>
            <NavLink to="/create" className="link">
              Create
            </NavLink>
            <button className="auth" onClick={handleLogout}>
              <i
                className="bi bi-box-arrow-right"
                style={{ margin: "0 6px" }}
              ></i>
              Logout
            </button>
          </>
        ) : (
          <button className="auth" onClick={handleLogin}>
            <i className="bi bi-google" style={{ margin: "0 6px" }}></i>Login
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
