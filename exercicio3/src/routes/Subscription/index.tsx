import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Header from "../../components/Header";

export default function Subscription() {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="container">
            <div className="mt30 mb30">
              <Card title="Página de inscrição" />
            </div>
            <div className="dflex">
              <Link to="/promotion">
                <Button text="Ver promoção" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
