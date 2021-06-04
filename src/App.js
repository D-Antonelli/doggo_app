import React, { useState, useEffect } from "react";
import axios from "axios";
import result from "./data";

const Form = (props) => {
  return (
    <form>
      <fieldset>
        <legend>Search by breed</legend>
        {props.data.map((prop) => (
          <Select
            value={prop.name}
            checked={props.selected === prop.name}
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
    <div>
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

const Gallery = (props) => {
  return (
    <div className="gallery">
      {props.data.map((prop) => (
        <ImageCard
          link={prop.image.url}
          detail={prop.name}
          key={prop.id}
          text={prop.image.id}
        />
      ))}
    </div>
  );
};

const ImageCard = (props) => {
  return (
    <figure>
      <img src={props.link} alt={props.detail} />
      <figcaption>
        <span>picture id:</span> {props.text}
      </figcaption>
    </figure>
  );
};


const App = () => {
  const [selected, setSelected] = useState("");
  const [data, setData] = useState(result);

  const handleOptionChange = (event) => {
    setSelected(event.target.value);
  };


  useEffect(() => {
    const url = "https://api.thedogapi.com/v1/breeds?page=0&limit=15&order=Asc";
    const API_KEY = process.env.REACT_APP_API_KEY;
  }, []);


  return (
    <div>
      <h1>Search for pictures of good doggos</h1>
      <p>Filter by breed for more choice!</p>
      <div className="sidebar">
        <Form data={data} selected={selected} onChange={handleOptionChange} />
        <button>previous</button>
        <button>next page</button>
      </div>
      <Gallery data={data} />
    </div>
  );
};

export default App;
