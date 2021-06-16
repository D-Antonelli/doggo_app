import "../styles/PaginationBtn.scss";

const PaginationBtn = (props) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className="page__btn"
    >
      {props.text}
    </button>
  );
};

export default PaginationBtn;
