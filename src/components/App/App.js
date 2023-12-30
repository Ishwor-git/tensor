import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "../../pages/home/Home";
import Programs from "../../pages/programs/Programs";
import Error404 from "../../pages/Error404/Error404";
// import ApplyForm from "../../pages/Apply/ApplyForm";
import Apply from "../../pages/Apply/Apply";
// import Error404Test from "../../pages/Error404/Error404Test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/programs" element={<Programs />} />
        {/* <Route path="/apply" element={<Apply />} /> */}
        <Route path="/apply" element={<Apply />} />

        <Route path="*" element={<Error404 />} />
        {/* <route pat="*" element={<Error404Test/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
