import "./header.scss";
import { memo } from "react";
import NavBar from "./NavBar/NavBar";
import Logo from "./Logo/Logo";
import FindTicketsBlock from "./FindTicketsBlock/FindTicketsBlock";

const HeaderMain = memo(() => {
  return (
    <div className="wrapper__main">
      <header className="header">
        <div className="top">
          <Logo />
          <NavBar />
        </div>
        <div className="header__content">
          <div className="header__maintitle">
            <span>Вся жизнь - </span>
            <span className="maintitle_bold">путешествие! </span>
          </div>
          <div className="header__findTicketsBlock">
            <FindTicketsBlock />
          </div>
        </div>
      </header>
    </div>
  );
});

export default HeaderMain;
