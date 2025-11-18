import { useState, useContext } from 'react';
import Mix from './mix';
import { AuthContext } from './firebasefile/authContext';

function UserData() {

  const { user } = useContext(AuthContext); // 🔥 get logged-in user

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: ""
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      console.error("User not logged in");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/lostitems", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          ...formData,
          userId: user.uid
        })
      });

      if (!res.ok) throw new Error("Request failed");

      setSuccess("Item added!");

      const result = await res.json();
      console.log("Added:", result);

      setFormData({
        name: "",
        description: "",
        location: ""
      });

    } catch (err) {
      console.error("Error adding item:", err);
    }
  };

  return (
    <div>
      <Mix
        onSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
        handleChange={handleChange}
      />
    </div>
  );
}

export default UserData;
