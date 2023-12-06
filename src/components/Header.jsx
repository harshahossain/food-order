import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "../UI/Button";
import CartContext from "../store/CartContext";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);
  // const totalCartItems = cartCtx.items.length;
  return (
    <header id="main-header">
      <div id="title" alt="A restaurant">
        <img src={logoImg} />
        <h1>Online Food Shop</h1>
      </div>
      <nav>
        <Button textOnly>Cart({totalCartItems})</Button>
      </nav>
    </header>
  );
}
