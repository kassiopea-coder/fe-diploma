import React from "react";
import { Link } from "react-router-dom";
import "./logo.scss";

export default function Logo() {
  return (
    <div className="header__logo">
      <Link to="/" className="logo__link">
        Лого
      </Link>
    </div>
  );
}
