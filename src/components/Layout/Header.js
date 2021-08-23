import React from "react";

import mealsImg from "../../assets/imgbanner.jpg";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
