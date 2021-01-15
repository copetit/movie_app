import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image:
      "https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "kimbap",
    image:
      "https://www.thespruceeats.com/thmb/aPsmbaRgCtFLUTUFGXZBIAW93H8=/3797x2848/smart/filters:no_upscale()/kimbap-korean-sushi-rolls-2118795-Hero-5b7dbdd346e0fb00250718b8.jpg",
    rating: 2
  },
  {
    id: 3,
    name: "apple",
    image:
      "https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/apple-seasonal-colors-header-accessories-202006_FMT_WHH?wid=1472&hei=880&fmt=png-alpha&qlt=80&.v=1590688988000",
    rating: 5
  }
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h3>I like {name}</h3>
      <h4>rating:{rating}/5</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
