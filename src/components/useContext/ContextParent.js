/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Nov 27 2020 02:42:12 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState } from "react";
import { MemoizedChildA } from "./Children";

export const CountContext = React.createContext();
const CountProvider = CountContext.Provider;

export const ContextParent = () => {
  const [count, setCount] = useState(0);

  console.log("[6] Context Parent Rendered");

  return (
    <>
      <h1>useContext</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increase Count
      </button>

      <CountProvider value={count}>
        <MemoizedChildA />
      </CountProvider>
    </>
  );
};
