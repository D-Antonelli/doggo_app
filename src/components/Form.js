import "../styles/form.scss";

const Form = (props) => {
  return (
    <form className="form">
      <fieldset>
        <legend>Search by breed</legend>
        {props.data.map((prop) => (
          <Select
            value={prop.id}
            checked={props.selected === prop.id.toString()}
            onChange={props.onChange}
            text={prop.name}
            key={prop.id}
          />
        ))}
      </fieldset>
    </form>
  );
};

const Select = (props) => {
  return (
    <div className="form__input">
      <label>
        <input
          type="radio"
          name="breed"
          value={props.value}
          checked={props.checked}
          onChange={props.onChange}
          className="form-check-input"
        />
        {props.text}
      </label>
    </div>
  );
};

export default Form;