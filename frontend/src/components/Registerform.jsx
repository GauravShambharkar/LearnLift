import { useState } from "react";
import { useRef } from "react";
import cors from "cors";

const Registerform = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:3000/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    console.log(user);
  };

  const handleDelete = async (e) => {
    await fetch("http://localhost:3000/user/deleteUser", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email: user.email, password: user.password}),
    });
    console.log("user deleted");
  };

  return (
    <>
      <form action="" onSubmit={handleFormSubmit}>
        <input
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          type="text"
          placeholder="name"
        />
        <input
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          type="text"
          placeholder="email"
        />
        <input
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          type="text"
          placeholder="password"
        />
        <button type="submit">submit</button>
        <button onClick={handleDelete} type="button">
          delete
        </button>
      </form>
    </>
  );
};

export default Registerform;
