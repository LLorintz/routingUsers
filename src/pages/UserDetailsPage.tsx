import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

type User= {
  name: { first: string; last: string };
  email: string;
  phone: string;
  location: { city: string; country: string };
  picture: { large: string };
}

const UserDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/?uuid=" + id)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.results[0]);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading user details...</p>;
  }

  if (!user) {
    return <p>User not found!</p>;
  }

  return (
    <div>
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