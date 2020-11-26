/*
Author: chankruze (chankruze@geekofia.in)
Created: Mon Oct 19 2020 22:42:36 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState } from "react";

const defaultPerson = {
  firstName: "John",
  lastName: "Doe",
};

export const ObjectUseState = () => {
  const [person, setPerson] = useState(defaultPerson);

  const changeName = () => {
    person.firstName = "John2";
    person.lastName = "Doe2";
    setPerson(person);
  };

  const changeNewName = () => {
    setPerson({
      firstName: "John3",
      lastName: "Doe3",
    });
  };

  console.log("[3] ObjectUseState Rendered");
  return (
    <div>
      <h1>State Immutability</h1>
      <h2>ObjectUseState</h2>
      <p>
        Mutating an object or an array as state will not cause a re-render when
        used with the useState or useReducer hook.
        <br />
        To re-render, make a copy of the existing state, modify as necessary and
        then pass the new state to the setter function or while returning from
        the reducer function.
      </p>
      <h2>
        {person.firstName} {person.lastName}
      </h2>
      <button onClick={changeName}>Change Name</button>
      <button onClick={changeNewName}>Change Name</button>
    </div>
  );
};
