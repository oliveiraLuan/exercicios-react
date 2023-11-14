import './styles.css';

export type Props = {
    text : string
}

export default function Card({text}){
    return (
        <div className="card">
            {text}
        </div>
    );
}