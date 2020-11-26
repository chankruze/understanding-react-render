/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Nov 27 2020 03:07:42 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";

export const CountContext2 = React.createContext();
const CountProvider2 = CountContext2.Provider;

export const ContextParent2 = ({ children }) => {
  const [count, setCount] = React.useState(0);

  console.log("[6] Context Parent2 Rendered");

  return (
    <>
      <h1>useContext 2</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increase Count
      </button>

      <CountProvider2 value={count}>{children}</CountProvider2>
    </>
  );
};
