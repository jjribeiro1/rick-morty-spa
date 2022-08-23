import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1 className="header_title">Rick and Morty</h1>
      <Link to={"/create"}>
        <button className="header_button">Novo Personagem</button>
      </Link>
    </header>
  );
}

export default Header;
