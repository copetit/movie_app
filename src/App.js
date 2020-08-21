import React from "react";

function Food({ fav }) {
  return <h3>I like {fav}</h3>;
}

function App() {
  return (
    <div>
      <h1>hello!</h1>
      <Food fav="Kimchi" />
      <Food fav="pizza" />
      <Food fav="sushi" />
    </div>
  );
}

export default App;
