import { auth } from "./firebase";
import { signOut } from "firebase/auth";

function Logout(){
   const handleLogout = () => {
  signOut(auth)
    .then(() => {
      console.log("signed out successfully");

      // FIX: wait for AuthContext to update
      setTimeout(() => {
        navigate("/");
      }, 100);
    })
    .catch((error) => console.log(error));
};

    return (
        <div> 
            <button className = "logg"onClick={handleLogout} style = {styles.button}>
                Logout
            </button>
        </div>
    )
}
export default Logout;