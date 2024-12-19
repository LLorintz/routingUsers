import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";



type User={
  login: { uuid: string };
  name: { first: string; last: string };
  email: string;
  picture: { large: string };
}

type UserListProps = {
  users: User[];
}

const Userspage = ({users}:UserListProps) => {
  

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