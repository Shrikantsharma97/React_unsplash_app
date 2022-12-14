import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";
//import { createApi } from "unsplash-js"

const unsplash = new Unsplash({
    accessKey: "zX0IiV-OAV1Mh6Of9NiYiLxkq8zpfuZA7iZ6LLheYZA",
  });

  export default function SearchPhotos() {
    const [query, setQuery] = useState("");
    const [pics, setPics] = useState([]);
  
    const searchPhotos = async (e) => {
      e.preventDefault();
      unsplash.search
    .photos(query,1.20)
    .then(toJson)
    .then((json) => {
        setPics(json.results);
    });
      console.log("Submitting the Form");
      //search.photos(keyword, page, per_page, filters)
    };

  return (
    <>
      <form className="form" onSubmit={searchPhotos}>
        <label className="label" htmlFor="query">
          {" "}
          📷
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Try "dog" or "apple"`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="card-list">
        {pics.map((pic) =>
          <div className="card" key={pic.id}>
            <img
              className="card--image"
              alt={pic.alt_description}
              src={pic.urls.full}
              width="50%"
              height="50%"
            ></img>
          </div>)};
      </div>
    </>
  );
}