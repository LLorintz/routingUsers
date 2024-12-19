import React from "react";
import { Link } from "react-router-dom";

type UserCardProps = {
  user: {
    login: { uuid: string };
    name: { first: string; last: string };
    email: string;
    picture: { large: string };
  };
}

 const UserCard = ({ user }:UserCardProps) => {
  return (
    <div className="user-card">
      <img src={user.picture.large} alt="User profile" className="user-card-img" />
      <h2 className="user-card-name">{user.name.first} {user.name.last}</h2>
      <Link to={`/users/${user.login.uuid}`} className="user-card-link">View Details</Link>
    </div>
  );
};

export default UserCard;