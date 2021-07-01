import React from "react";
import { Link } from "react-router-dom";
import api from "../../service/api";
import "../../styles/components/profile.sass";

class Character extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: "",
      character: {},
    };
  }

  render() {
    const { isLoaded, error, character } = this.state;

    if (!isLoaded) {
      return (
        <div className="character-page__character">
          <h1>{`Erro: ${error}`}</h1>
        </div>
      );
    } else {
      return (
        <div
          className={
            "character-page__character " +
            (character.status === "Dead"
              ? "character-page__character--purple"
              : "")
          }
        >
          <div className="character-page__character__inside-circle">
            <img
              src={character.image}
              alt={character.firstname}
              className="character-page__character__inside-circle__image"
            />
          </div>

          <div className="character-page__character__character-content">
            <h2>{character.name}</h2>

            <h3>
              <strong>Status:</strong> {character.status}
            </h3>
            <h3>
              <strong>Species:</strong> {character.species}
            </h3>
            <h3>
              <strong>Type:</strong> {character.type}
            </h3>
            <h3>
              <strong>Gender:</strong> {character.gender}
            </h3>
            <h3>
              <strong>Origin:</strong> {character.origin.name}
            </h3>
            <h3>
              <strong>Location:</strong> {character.location.name}
            </h3>
          </div>
        </div>
      );
    }
  }
  componentDidMount() {
    let result = api.get(this.props.characterUrl);
    console.log(this.props.characterUrl);
    result
      .then((data) => {
        this.setState({
          isLoaded: true,
          character: data.data,
        });
      })
      .catch((err) =>
        this.setState({
          error: err.message,
        })
      );
  }
}

export default Character;
