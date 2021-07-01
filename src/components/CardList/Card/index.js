import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

class Card extends React.Component {
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
        <div className="card-list__cards__card">
          <h1>{`Erro: ${error}`}</h1>
        </div>
      );
    } else {
      return (
        <div
          className={
            "card-list__cards__card " +
            (character.status === "Dead"
              ? "card-list__cards__card--purple"
              : "")
          }
        >
          <div className="card-list__cards__card__inside-circle">
            <Link to={`/${character.id}`}>
              <img
                src={character.image}
                alt={character.firstname}
                className="card-list__cards__card__inside-circle__image"
              />
            </Link>
          </div>
          <div className="card-list__cards__card__card-header">
            <h2>{character.name}</h2>
          </div>
          <div className="card-list__cards__card__card-content">
            <h2>
              <strong>Status:</strong> {character.status}
            </h2>
            <Link
              to={`/${character.id}`}
              className="card-list__cards__card__card-button"
            >
              See more...
            </Link>
          </div>
        </div>
      );
    }
  }
  componentDidMount() {
    let result = axios.get(this.props.character.url);
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

export default Card;
