import { useState } from "react";
import { useRef } from "react";
import cors from "cors";

const Registerform = () => {
  const [user, setUser] = useState("");

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
      body: JSON.stringify(user.email),
    });
  }

  return (
    <>
      <form action="" onSubmit={handleFormSubmit}>
        <input
          onChange={(e) => setUser({ name: e.target.value })}
          type="text"
          placeholder="name"
        />
        <input
          onChange={(e) => setUser({ email: e.target.value })}
          type="text"
          placeholder="email"
        />
        <input
          onChange={(e) => setUser({ password: e.target.value })}
          type="text"
          placeholder="password"
        />
        <button type="submit">submit</button>
        <button onClick={handleDelete} type="submit">delete</button>
      </form>
    </>
  );
};

export default Registerform;
