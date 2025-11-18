import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./firebasefile/authContext";
import { auth } from "./firebasefile/firebase";
import { signOut } from "firebase/auth";

export default function Navbar() {

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) return null;

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("signed out successfully");
        alert("Logged out");
        navigate("/");   
      })
      .catch((error) => console.log(error));
  };

  return (
    <nav className="nav">
      <Link to="/add" className="site-title">Lost and Found</Link>

      <ul>
        <li>
          <Link to="/view">View Data</Link>
        </li>

        <li>
          <Link to="/my-items" className="nav-link">My Items</Link>
        </li>

        <li>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}
