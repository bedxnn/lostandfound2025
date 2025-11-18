import { useState, useEffect, useContext } from 'react';
import './view.css';
import { AuthContext } from "../firebasefile/authContext";

function View() {
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function fetchItems() {
            try {
                const response = await fetch("http://localhost:8080/lostitems");
                const data = await response.json();
                setItems(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error("error fetching", error);
            }
        }
        fetchItems();
    }, []);

    const filteredItems = items.filter((item) => {
        const text = search.toLowerCase();
        const matchName = item.name?.toLowerCase().includes(text);
        const matchStudent = item.student_id
            ? item.student_id.toString().includes(text)
            : false;

        return matchName || matchStudent;
    });

    return (
        <div className="vieww">

            {/* SEARCH BAR */}
            <div className="searchh">
                <input
                    type="text"
                    placeholder="search by name or id"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* ITEMS LIST */}
            {filteredItems.length === 0 ? (
                <p className="noitems">There are currently no lost items</p>
            ) : (
                <ul>
                    {filteredItems.map((item, index) => (
                        <li className="box" key={index}>
                            <p><strong>Name:</strong> {item.name}</p>
                            <p><strong>Description:</strong> {item.description}</p>
                            <p><strong>Location:</strong> {item.location}</p>
                            <p><strong>Student id:</strong> {item.student_id ?? "none"}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default View;
