import { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignup = () => {
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setError("");
        navigate("/login"); // redirect to login
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Create Account</h2>

      <input
        style={styles.input}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        style={styles.input}
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p style={styles.error}>{error}</p>}

      <button style={styles.button} onClick={handleSignup}>
        Sign Up
      </button>
    </div>
  );
}

export default Signup;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    margin: "100px auto",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
    fontWeight: "bold",
    fontSize: "24px",
  },
  input: {
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#3b82f6",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginBottom: "10px",
  },
};
