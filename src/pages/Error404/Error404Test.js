import "./Error404Test.css";

import React from "react";
import { Link } from "react-router-dom";

export default function Error404Test() {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1>404</h1>
        <p>Oops! The page you are looking for might be in another galaxy.</p>
        <Link to="/">Go Home</Link>
      </div>
    </div>
  );
}
