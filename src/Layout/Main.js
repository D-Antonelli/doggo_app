import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Form from "../Components/Form";
import Gallery from "../Components/Gallery";
import PaginationBtn from "../Components/PaginationBtn";
import DropdownBtn from "../Components/DropdownBtn";
import { CONFIG, URL, pagination_limit } from "../Request";

const Main = () => {
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
      const response = await axios.get(URL.breeds({ page: page }), CONFIG);
      setBreedList(response.data);
      const total_items = response.headers["pagination-count"];
      total_pages.current = Math.floor(total_items / pagination_limit);
    };
    getBreeds();
  }, [page]);

  useEffect(() => {
    const getImages = async () => {
      const response = await axios.get(URL.images({ id: selected }), CONFIG);
      setImages(response.data);
    };
    getImages();
  }, [selected]);

  return (
    <main className="main_page">
      <div className="sidebar">
        <DropdownBtn text="Search by breed" hidden={true} />
        <Form
          data={breedList}
          selected={selected}
          onChange={handleOptionChange}
        />
        <PaginationBtn
          disabled={page <= 0}
          onClick={() => setPage(page - 1)}
          text="previous"
        />
        <PaginationBtn
          disabled={page >= total_pages.current}
          onClick={() => setPage(page + 1)}
          className="next__btn"
          text="next page"
        />
      </div>
      <div className="empty_flex"></div>
      <Gallery data={images} />
    </main>
  );
};

export default Main;
