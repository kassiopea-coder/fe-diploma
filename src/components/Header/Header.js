import { memo } from "react";
import HeaderMain from "./HeaderMain";
import HeaderSelect from "./HeaderSelect";
import HeaderSuccess from "./HeaderSuccess";

const Header = memo(({ headerType }) => {
  return (
    <>
      {headerType === "main" && <HeaderMain />}
      {headerType === "select" && <HeaderSelect />}
      {headerType === "success" && <HeaderSuccess />}
    </>
  );
});

export default Header;
