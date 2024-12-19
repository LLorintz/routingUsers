
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import UsersPage from "./pages/Userspage";
import UserDetailsPage from "./pages/UserDetailsPage";
import './app.css'

function App() {


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
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App
