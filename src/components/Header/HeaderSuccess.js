import { memo } from "react";
import "./header.scss";
import NavBar from "./NavBar/NavBar";
import Logo from "./Logo/Logo";

const HeaderSuccess = memo(() => {
  return (
    <div className="wrapper__success">
      <header className="header">
        <div className="top">
          <Logo />
          <NavBar />
        </div>
        <div className="header__content">
          <div className="success__title">Благодарим Вас за заказ!</div>
        </div>
      </header>
    </div>
  );
});

export default HeaderSuccess;
