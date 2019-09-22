import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CounterCard from "./components/CounterCard";
import cardDatas from "./cardData";
import Header from "./components/Header";

function App() {
  const cardComponents = cardDatas.map(card => (
    <CounterCard data={card} key={card.id} />
  ));
  return (
    <div>
      <Header />
      <div className="container">{cardComponents}</div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
