import React from "react";
import { NavLink } from "react-router-dom";

function Homepage( { dogs }) {
  return (
    <div>
      {dogs.map((dog) => (
        <NavLink exact to={`/dogs/${dog.name}`}>
          {dog.name}
        </NavLink>
      ))}
    </div>
  );
}

export default Homepage;
