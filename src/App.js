import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Form from "./components/Form";
import Gallery from "./components/Gallery";
import Button from "./components/Button";

const App = () => {
  const [selected, setSelected] = useState("1");
  const [breedList, setBreedList] = useState();
  const [images, setImages] = useState();
  const [page, setPage] = useState(0);
  const total_pages = useRef();

  const handleOptionChange = (event) => {
    setSelected(event.target.value);
  };

  useEffect(() => {
    const sendGetRequest = async () => {
      const API_KEY = process.env.REACT_APP_API_KEY;
      const pagination_limit = 15;
      const url = `https://api.thedogapi.com/v1/breeds?page=${page}&limit=${pagination_limit}&order=Asc`;

      let config = {
        headers: {
          "x-api-key": API_KEY,
        },
      };
      try {
        const response = await axios.get(url, config);
        setBreedList(response.data);
        const total_items = response.headers["pagination-count"];
        total_pages.current = Math.floor(total_items / pagination_limit);
      } catch (error) {
        console.log(error);
      }
    };
    sendGetRequest();
  }, [page]);

  useEffect(() => {
    const sendGetRequest = async () => {
      const API_KEY = process.env.REACT_APP_API_KEY;
      const url = `https://api.thedogapi.com/v1/images/search?limit=10&breed_id=${selected}`;

      let config = {
        headers: {
          "x-api-key": API_KEY,
        },
      };

      try {
        const response = await axios.get(url, config);
        setImages(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    sendGetRequest();
  }, [selected]);

  if (breedList) {
    return (
      <div>
        <h1>Search for pictures of good doggos</h1>
        <p>Filter by breed for more choice!</p>
        <div className="sidebar">
          <Form
            data={breedList}
            selected={selected}
            onChange={handleOptionChange}
          />
          <Button
            disabled={page <= 0}
            onClick={() => setPage(page - 1)}
            text="previous"
          />
          <Button
            disabled={page >= total_pages.current}
            onClick={() => setPage(page + 1)}
            text="next page"
          />
        </div>
        <Gallery data={images} />
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default App;
