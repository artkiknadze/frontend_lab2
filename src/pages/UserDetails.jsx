import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const UserDetailsPage = () => {
  const { userid } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/users/" + userid).then((res) => {
      setUser(res.data);
    });
  }, [userid]);

  if (!user) return "Loading...";

  return (
    <div>
      <h2>User Information</h2>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Username:</strong> {user.username}
      </p>

      <h3>Name</h3>
      <p>
        <strong>First Name:</strong> {user.name.firstname}
      </p>
      <p>
        <strong>Last Name:</strong> {user.name.lastname}
      </p>

      <h3>Phone</h3>
      <p>{user.phone}</p>

      <h3>Address</h3>
      <p>
        <strong>Street:</strong> {user.address.street} {user.address.number}
      </p>
      <p>
        <strong>City:</strong> {user.address.city}
      </p>
      <p>
        <strong>Zip Code:</strong> {user.address.zipcode}
      </p>

      <h3>Geolocation</h3>
      <p>
        <strong>Latitude:</strong> {user.address.geolocation.lat}
      </p>
      <p>
        <strong>Longitude:</strong> {user.address.geolocation.long}
      </p>
    </div>
  );
};
