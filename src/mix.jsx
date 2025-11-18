import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Mix({ onSubmit, formData, setFormData }) {

  const [plus, setPlus] = useState(false);
  const [addIt, setAddIt] = useState(false);

  const handleClick = () => {
    setPlus(!plus);
    setAddIt(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔥 Only show warning if BOTH are empty
    if (!formData.name.trim() && !formData.student_id.trim()) {
      alert("Please enter at least a Name or Student ID.");
      return;
    }

    onSubmit(e);

    setAddIt(true);
    setPlus(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>

        <div className="first_box">
          <button id="plusbutton" type="button" onClick={handleClick}>
            Add lost item
          </button>
        </div>

        {addIt && <p className="success">Successfully Added!</p>}

        <h2 className="welcome">
          Hello, welcome to my app! <br />
          Click "Add lost item" to add an item. <br />
          Click "View data" to view items. <br />
          Click "Lost and Found" to return home.
        </h2>

        {plus && (
          <div className="inputs">
            <div className="table">

              <div>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Enter name"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Description</label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  placeholder="Enter description"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  placeholder="Enter location found"
                  onChange={handleChange}
                />
              </div>

              {/* 🔥 Student ID is back */}
              <div>
                <label>Student ID</label>
                <input
                  type="text"
                  name="student_id"
                  value={formData.student_id}
                  placeholder="Enter student ID"
                  onChange={handleChange}
                />
              </div>

            </div>

            <button id="plusButton" type="submit">ADD</button>
          </div>
        )}

      </form>
    </div>
  );
}

export default Mix;
