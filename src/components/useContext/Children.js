/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Nov 27 2020 02:48:02 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
import { CountContext } from "./ContextParent";
import { CountContext2 } from "./ContextParent2";

export const ChildA = () => {
  console.log("[6.1] Child A Rendered");
  return (
    <div>
      Child A
      <ChildB />
    </div>
  );
};

export const MemoizedChildA = React.memo(ChildA);

export const ChildB = () => {
  console.log("[6.2] Child B Rendered");
  return (
    <div>
      Child B
      <ChildC />
    </div>
  );
};

export const ChildC = () => {
  //   const context = React.useContext(CountContext);
  const context2 = React.useContext(CountContext2);
  console.log("[6.3] Child C Rendered");
  return <div>Child C count = {context2}</div>;
};
