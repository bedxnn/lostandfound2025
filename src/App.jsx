import "./index.css";
import ForgotPassword from "./firebasefile/ForgotPassword.jsx";
import MyItems from "./pages/MyItems";


import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx"

import Home from "./home.jsx";
import Login from "./firebasefile/login.jsx";
import Signup from "./firebasefile/Signup.jsx";

// Add item page (your User.jsx)
import UserData from "./User.jsx";

// View items page
import View from "./pages/view.jsx";

// Protected route wrapper
import ProtectedRoute from "./firebasefile/ProtectedRoute.jsx";

function App() {
  return (
    <div>
       <Navbar /> 

      <Routes>

        {/* Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/my-items" element={<MyItems />} />


        {/* Add Lost Item Page */}
        <Route
          path="/add"
          element={
            <ProtectedRoute>
              <UserData />
            </ProtectedRoute>
          }
        />

        {/* View All Lost Items */}
        <Route
          path="/view"
          element={
            <ProtectedRoute>
              <View />
            </ProtectedRoute>
          }
        />

      </Routes>

    </div>
  );
}

export default App;
