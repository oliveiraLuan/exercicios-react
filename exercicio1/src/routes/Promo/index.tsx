import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";

export default function Promo() {
  return (
    <>
      <main>
        <Card text="Página de Promoção" />
        <Link to="/subscribe">
          <Button text="Quero participar" />
        </Link>
      </main>
    </>
  );
}
