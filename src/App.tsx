
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import UsersPage from "./pages/Userspage";
import UserDetailsPage from "./pages/UserDetailsPage";
import './app.css'
import { useEffect, useState } from "react";

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, []);

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/users">Users</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/users" element={<UsersPage users={users}/>} />
        <Route path="/users/:id" element={<UserDetailsPage users={users} />} />
      </Routes>
    </Router>
  );
}

export default App
