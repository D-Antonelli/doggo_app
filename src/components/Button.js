import "../styles/button.scss";

const Button = (props) => {
  return (
    <button disabled={props.disabled} onClick={props.onClick} className="page__btn">
      {props.text}
    </button>
  );
};

export default Button;