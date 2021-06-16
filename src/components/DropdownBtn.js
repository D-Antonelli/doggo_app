import "../styles/DropdownBtn.scss";

const DropdownBtn = (props) => {
  return (
    <button className="dropdown-btn" hidden={props.hidden}>
      {props.text}
      <i className="arrow__down"></i>
    </button>
  );
};

export default DropdownBtn;
