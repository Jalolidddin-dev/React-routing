import React, { useState } from "react";

function UserBox() {
  const [users, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  return (
    <div>
      {users.map((user) => (
        <div key={user.text}>{user.text}</div>
      ))}
    </div>
  );
}

export default UserBox;
