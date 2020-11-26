/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Nov 26 2020 02:38:05 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState } from "react";
import { Child } from "./Child";

export const Parent = () => {
  const [count, setCount] = useState(0);

  console.log(`[5] Parent Rendered`);
  return (
    <div>
      <h1>Parent</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increase Count
      </button>
      <button onClick={() => setCount(0)}>Set Count 0</button>
      <button onClick={() => setCount(5)}>Set Count 5</button>
      <Child />
    </div>
  );
};
