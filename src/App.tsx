import React from "react";
import { Routes, Route } from "react-router-dom";
import Unlockable from "./Components/Unlockable";
const App = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Unlockable />}></Route>
        {/* <Route path={"*"} element={<Mint />}></Route> */}
      </Routes>
    </>
  );
};
export default App;
