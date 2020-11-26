/*
Author: chankruze (chankruze@geekofia.in)
Created: Mon Oct 19 2020 22:55:24 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState } from "react";

const initArray = ["John", "Doe"];

export const ArrayUseState = () => {
  const [persons, setPersons] = useState(initArray);

  const updateArray = () => {
    persons.push("John2");
    persons.push("Doe2");
    setPersons(persons);
  };
  const updateArray2 = () => {
    setPersons([...persons, `John${Math.ceil(Math.random() * 100)}`]);
  };

  console.log("[3.1] ArrayUseState Rendered");

  return (
    <div>
      <h2>Array Use State</h2>
      <p>
        Mutating arrays directly (reference is same) don't cause re-render. The
        reference must be new to re-render
      </p>
      <h3>Persons Queue</h3>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>
            {index} - {person}
          </li>
        ))}
      </ul>
      <button onClick={updateArray}>Update Array</button>
      <button onClick={updateArray2}>Update Array2</button>
    </div>
  );
};
