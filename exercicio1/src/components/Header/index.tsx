
import { Link } from "react-router-dom";
import "./styles.css";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h1>MeuSite</h1>
      </Link>
    </header>
  );
}
