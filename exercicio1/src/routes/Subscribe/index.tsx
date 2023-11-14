import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";

export default function Subscribe() {
  return (
    <>
      <main>
        <Card text="Página de inscricão" />
        <Link to="/promo">
          <Button text="Ver Promoção" />
        </Link>
      </main>
    </>
  );
}
