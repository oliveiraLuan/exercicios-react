import "./styles.css";

export type Props = {
  text: string;
};

export default function Button({ text }) {
  return (
    <div className="container-button">
      <button>{text}</button>
    </div>
  );
}
