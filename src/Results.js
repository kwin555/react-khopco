import React from "react";
import Dog from "./Dog";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Dogs Found</h1>
      ) : (
        pets.map(pet => {
          return (
            <Dog
              key={pet.id}
              name={pet.name}
              id={pet.id}
              imgLink={pet.imageLink}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
