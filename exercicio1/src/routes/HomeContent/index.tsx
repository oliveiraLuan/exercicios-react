
import Card from "../../components/Card";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

export default function HomeContent(){
    return(
        <>
            <Card text="Página Inicial"/>
            <Link to="/promo">
                <Button text="Ver promoção"/>
            </Link>
        
        </>
    );
}