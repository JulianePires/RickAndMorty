import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import Image from "../../assets/rick_and_morty.png";
import Character from "../../components/Character";
import "../../styles/pages/character.sass";

function CharacterDetails() {
  let { character_id } = useParams();

  return (
    <div className="character-page">
      <Link to="/" className="character-page__back-button">
        {"< back"}
      </Link>
      <img src={Image} alt="Rick and Morty" className="character-page__image" />
      <Character characterUrl={`/${character_id}`} />
    </div>
  );
}

export default CharacterDetails;
