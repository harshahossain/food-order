import logoImg from "../assets/logo.jpg";
import Button from "../UI/Button";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title" alt="A restaurant">
        <img src={logoImg} />
        <h1>Online Food Shop</h1>
      </div>
      <nav>
        <Button textOnly>Cart(0)</Button>
      </nav>
    </header>
  );
}
