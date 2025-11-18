import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../firebasefile/authContext";
import "./view.css";

function MyItems() {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  const [confirm, setConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch("http://localhost:8080/lostitems");
        const data = await response.json();

        // Only items the user owns
        const mine = data.filter(item => item.userId === user?.uid);
        setItems(mine);
      } catch (error) {
        console.error("error fetching items:", error);
      }
    }
    fetchItems();
  }, [user]);

  const handleClaim = async (id) => {
    try {
      const res = await fetch(`http://localhost:8080/lostitems/${id}/claim`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.uid })
      });

      if (!res.ok) {
        alert(await res.text());
        return;
      }

      setItems(items.filter(item => item.id !== id));
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div className="vieww">
      <h2>Your Posted Items</h2>

      {items.length === 0 ? (
        <p className="noitems">You haven’t posted any items.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li className="box" key={index}>
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Description:</strong> {item.description}</p>
              <p><strong>Location:</strong> {item.location}</p>
              <p><strong>Student ID:</strong> {item.student_id}</p>

              {/* OPEN CONFIRM BOX */}
              <button
                id="claimm"
                onClick={() => {
                  setDeleteId(item.id);
                  setConfirm(true);
                }}
              >
                Claim / Delete
              </button>

              {confirm && (
                <div className="overlay">
                  <p>Pressing claim will delete this item! Are you sure?</p>

                  <button
                    className="cancel"
                    onClick={() => setConfirm(false)}
                  >
                    Cancel
                  </button>

                  <button
                    className="delete"
                    onClick={() => {
                      handleClaim(deleteId);
                      setConfirm(false);
                      setDeleteId(null);
                    }}
                  >
                    Delete
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyItems;
