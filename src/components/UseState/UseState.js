/*
Author: chankruze (chankruze@geekofia.in)
Created: Mon Oct 19 2020 20:23:07 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState } from "react";

export const UseState = () => {
  const [count, setCount] = useState(0);

  console.log("[1] UseState Rendered");

  return (
    <div>
      <h1>useState</h1>
      <p>
        1. Refresh the page, click on <code>Set Count 0</code> The comp. won't
        re-render.
      </p>
      <p>
        2. Refresh the page, click on <code>Increase Count</code> upto 5, then
        click on <code>Set Count 5</code> the comp. will re-render.
        <br /> Subsequent clicks on <code>Set Count 5</code> won't trigger
        re-renders.
      </p>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increase Count
      </button>
      <button onClick={() => setCount(0)}>Set Count 0</button>
      <button onClick={() => setCount(5)}>Set Count 5</button>
    </div>
  );
};

/**
 * //: Notes ://
 *
 * 1. React component re-renders is caused by the setter function of useState hook
 * 2. Exception: The component won't re-render if the useState hook updates the
 *    same value as current state.
 * 3. Same value after initial render ? The comp. won't rerender : The comp will update
 *    one more time and then bails out from any subsequent renders.
 */
