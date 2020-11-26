import React from "react";
import "./App.css";
import { ArrayUseState } from "./components/ImmutableState/ArrayUseState";
import { ObjectUseState } from "./components/ImmutableState/ObjectUseState";
import { Parent } from "./components/ParentChild/Parent";
import { ChildA } from "./components/useContext/Children";
import { ContextParent } from "./components/useContext/ContextParent";
import { ContextParent2 } from "./components/useContext/ContextParent2";
import { UseReducer } from "./components/UseReducer/UseReducer";
import { UseState } from "./components/UseState/UseState";

function App() {
  return (
    <div className="App">
      <UseState />
      <UseReducer />
      <ObjectUseState />
      <ArrayUseState />
      <Parent />
      <ContextParent />
      <ContextParent2>
        <ChildA />
      </ContextParent2>
    </div>
  );
}

export default App;
