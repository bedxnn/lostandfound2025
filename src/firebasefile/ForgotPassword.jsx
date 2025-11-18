import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async () => {
    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent!");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Reset Password</h2>

      <input
        type="email"
        placeholder="Enter your email"
        style={styles.input}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleReset} style={styles.button}>
        Send Reset Email
      </button>

      {message && <p style={styles.message}>{message}</p>}

      <Link to="/login" style={styles.link}>Back to Login</Link>
    </div>
  );
}

export default ForgotPassword;

const styles = {
  container: {
    marginTop: "120px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
  },
  input: {
    width: "280px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    width: "280px",
    padding: "10px",
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  link: {
    marginTop: "10px",
    color: "blue",
    textDecoration: "underline",
    cursor: "pointer",
  },
  message: {
    marginTop: "10px",
    color: "green",
  },
};
