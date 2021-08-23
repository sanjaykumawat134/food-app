import { useContext, useEffect, useState } from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import cartContext from "../../store/cart-context";
const HeaderCardButton = (props) => {
  const [btnIsHighLighted, setbtnIsHighLighted] = useState(false);
  const context = useContext(cartContext);
  const items = context.items;
  const { items: itemDependency } = context;
  // const numberOfCartItems = items.length;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  // const totalAmount = context.totalAmount;

  const btnClasses = `${classes.button} ${
    btnIsHighLighted ? classes.bump : ""
  }`;
  useEffect(() => {
    if (context.items.length === 0) {
      return;
    }
    setbtnIsHighLighted(true);
    const timer = setTimeout(() => {
      setbtnIsHighLighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [itemDependency]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;
