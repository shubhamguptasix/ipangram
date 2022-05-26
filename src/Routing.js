import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Container/Main";
import View from "./Container/View";

const Routing = (props) => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" caseSensitive={false} element={<Main />} />
        <Route exact path="/Main" caseSensitive={false} element={<Main />} />
        <Route exact path="/View" caseSensitive={false} element={<View />} />
      </Routes>
    </Router>
  );
};
export default Routing;
