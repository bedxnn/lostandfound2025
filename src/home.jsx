import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome</h1>

      <div style={styles.buttonContainer}>
        <Link to="/login" style={styles.button}>Login</Link>
        <Link to="/signup" style={styles.button}>Sign Up</Link>
      </div>
    </div>
  );
}

export default Home;

const styles = {
  container: {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f5f5f5",

  marginTop: "80px",
},

  title: {
    marginBottom: "30px",
    fontSize: "32px",
    fontWeight: "bold",
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "200px",
  },

  button: {
    padding: "12px",
    textAlign: "center",
    borderRadius: "6px",
    backgroundColor: "#3b82f6",
    color: "white",
    fontSize: "18px",
    textDecoration: "none",
  },
};
