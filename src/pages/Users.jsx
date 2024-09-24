import axios from "axios";
import { useEffect, useState } from "react";

export const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div className="userList">
      {users.map((e, index) => {
        return (
          <div className="item" key={"user_" + index}>
            <h1>
              {e.name.firstname} {e.name.lastname}
            </h1>
            <p>{e.email}</p>
            <a href={"/userdetails/" + e.id}>Check profile</a>
          </div>
        );
      })}
    </div>
  );
};
