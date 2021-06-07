import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Form from "./components/Form";
import Gallery from "./components/Gallery";
import Button from "./components/Button";
import "./App.scss";

/*
THERE NEEDS A PROPER EDGE-CASE HANDLING FOR MISSING DATA 
**/

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
    const getBreeds = async () => {
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
    getBreeds();
  }, [page]);

  useEffect(() => {
    const getImages = async () => {
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
    getImages();
  }, [selected]);

  if (breedList) {
    return (
      <div>
        <header>
          <h1 className="title title__primary">
            Search for pictures of good doggos
          </h1>
          <p className="title title__secondary">
            Filter by breed for more choice!
          </p>
        </header>
        <main className="main_page">
          <div className="sidebar">
            <button className="sidebar__dropdown-btn" hidden>
              Search by breed<i className="arrow__down"></i>
            </button>
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
              className="next__btn"
              text="next page"
            />
          </div>
          <div className="empty_flex"></div>
          <Gallery data={images} />
        </main>
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default App;
