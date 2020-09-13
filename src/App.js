import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h3>I like {name}</h3>
      <img src={picture}></img>
    </div>
  );
}

const foodILike = [
  {
    name: "kimchi",
    image:
      "https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg"
  },
  {
    name: "kimbap",
    image:
      "https://www.thespruceeats.com/thmb/aPsmbaRgCtFLUTUFGXZBIAW93H8=/3797x2848/smart/filters:no_upscale()/kimbap-korean-sushi-rolls-2118795-Hero-5b7dbdd346e0fb00250718b8.jpg"
  },
  {
    name: "apple",
    image:
      "https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/apple-seasonal-colors-header-accessories-202006_FMT_WHH?wid=1472&hei=880&fmt=png-alpha&qlt=80&.v=1590688988000"
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
