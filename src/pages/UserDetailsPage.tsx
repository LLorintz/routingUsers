import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

type User = {
    login: { uuid: string };
    name: { first: string; last: string };
    email: string;
    phone: string;
    location: { city: string; country: string };
    picture: { large: string };
  };
  
  type UserDetailsPageProps = {
    users: User[]; 
  }
  

const UserDetailsPage = ({users}:UserDetailsPageProps) => {
    const { id } = useParams<{ id: string }>();
    const user = users.find((u) => u.login.uuid === id);
  
    if (!user) {
      return <p>Felhasználó nem található!</p>;
    }


  return (
    <div className="user-details">
      <h1>{user.name.first} {user.name.last}</h1>
      <img src={user.picture.large} alt="User profile" />
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Location: {user.location.city}, {user.location.country}</p>
      <Link to="/users">Back to Users</Link>
    </div>
  );
};

export default UserDetailsPage;