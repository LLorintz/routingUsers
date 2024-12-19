import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";



type User={
  login: { uuid: string };
  name: { first: string; last: string };
  email: string;
  picture: { large: string };
}

interface UserListProps {
  users: User[];
}

const Userspage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
        setLoading(false);
      });
  }, []);



    if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <div className="users-list">
      <h1>User List</h1>
      <div className="users-list-grid">
        {users.map((user) => (
          <UserCard key={user.login.uuid} user={user} />
        ))}
      </div>
    </div>
  );
};


export default Userspage