import React, { useEffect, useState } from "react";

export default function Pet({ name, id }) {
  const [image, setImage] = useState("");
  useEffect(() => {
    const getDogList = async () => {
      await fetch(`https://dog.ceo/api/breed/${name}/images/random`)
        .then(resp => resp.json())
        .then(data => setImage(data.message))
        // eslint-disable-next-line no-console
        .catch(e => console.log("cannot fetch dogs", e));
    };

    getDogList();
  }, []);

  return (
    <div key={id} className="dog">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
      </div>
    </div>
  );
}
