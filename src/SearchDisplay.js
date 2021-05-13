/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import Results from "./Results";

const SearchParams = () => {
  const [dogList, setDogList] = useState([]);
  const [filteredDogList, setFilteredDogList] = useState([]);

  const handleChange = ({ target: { value } }) => {
    let currentList = [];
    let newList = [];

    if (value !== "") {
      currentList = dogList;
      newList = currentList.filter(item => {
        const lc = item.toLowerCase();
        const filter = value.toLowerCase();

        return lc.includes(filter);
      });
    } else {
      newList = dogList;
    }

    setFilteredDogList(newList);
  };

  useEffect(() => {
    const getDogList = async () => {
      await fetch("https://dog.ceo/api/breeds/list/all")
        .then(resp => resp.json())
        .then(data => {
          setDogList(Object.keys(data.message));
        })
        .catch(e => console.log("cannot fetch dogs", e));
    };

    getDogList();
    setFilteredDogList(dogList);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dogList.length]);

  return (
    <div className="search-params">
      <form>
        <input
          id="dog breed"
          defaultValue=""
          placeholder="Enter Dog Breed"
          onChange={handleChange}
        />
      </form>
      <Results
        pets={filteredDogList.map((dog, i) => ({
          name: dog,
          id: `${i}-${dog}`
        }))}
      />
    </div>
  );
};

export default SearchParams;
