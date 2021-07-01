import React from "react";
import CardList from "../../components/CardList";
import Image from "../../assets/r&m.png";

import "../../styles/pages/home.sass";

export class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <img src={Image} alt="Rick and Morty" className="home__image" />
        <CardList />
      </div>
    );
  }
}
