import axios from "axios";
import React from "react";
import api from "../../service/api";
import Card from "./Card";
import * as R from "ramda";
import SearchBox from "./SearchBox";
import ButtonGroup from "./ButtonGroup";
import "../../styles/components/cardList.sass";

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      isLoaded: false,
      next: null,
      prev: null,
    };
  }

  renderCards() {
    return this.state.characters.map((character) => {
      return <Card key={character.id} character={character} />;
    });
  }

  searchByName(e) {
    const name = e.target.value.toLowerCase();
    api.get(`/?name=${name}`).then((data) => {
      e.key === "Enter" &&
        this.setState({
          characters: data.data.results,
          next: data.data.info.next,
          prev: data.data.info.prev,
        });
    });
  }

  searchByStatus(e) {
    const status = e.target.value.toLowerCase();
    api.get(`/?status=${status}`).then((data) => {
      e.key === "Enter" &&
        this.setState({
          characters: data.data.results,
          next: data.data.info.next,
          prev: data.data.info.prev,
        });
    });
  }

  searchBySpecies(e) {
    const specie = e.target.value.toLowerCase();
    api.get(`/?specie=${specie}`).then((data) => {
      e.key === "Enter" &&
        this.setState({
          characters: data.data.results,
          next: data.data.info.next,
          prev: data.data.info.prev,
        });
    });
  }

  searchByType(e) {
    const type = e.target.value.toLowerCase();
    api.get(`/?type=${type}`).then((data) => {
      e.key === "Enter" &&
        this.setState({
          characters: data.data.results,
          next: data.data.info.next,
          prev: data.data.info.prev,
        });
    });
  }
  searchByGender(e) {
    const gender = e.target.value.toLowerCase();
    api.get(`/?gender=${gender}`).then((data) => {
      e.key === "Enter" &&
        this.setState({
          characters: data.data.results,
          next: data.data.info.next,
          prev: data.data.info.prev,
        });
    });
  }

  toNextPage(e) {
    if (this.state.next !== null) {
      const next = this.state.next;
      axios.get(next).then((data) => {
        console.log(data);
        this.setState({
          characters: data.data.results,
          next: data.data.info.next,
          prev: data.data.info.prev,
        });
      });
    }
  }
  toPrevPage(e) {
    if (this.state.prev !== null) {
      const prev = this.state.prev;
      axios.get(prev).then((data) => {
        this.setState({
          characters: data.data.results,
          next: data.data.info.next,
          prev: data.data.info.prev,
        });
      });
    }
  }

  render() {
    if (!R.isEmpty(this.state.error)) {
      return (
        <section className="card-list">
          <h2>{`Error: ${this.state.error}`}</h2>
        </section>
      );
    } else {
      return (
        <section className="card-list">
          <div className="card-list__search-group">
            <SearchBox
              placeholder="Search by name..."
              onChange={(e) => this.searchByName(e)}
              onKeyDown={(e) => this.searchByName(e)}
            />
            <SearchBox
              placeholder="Search by status..."
              onChange={(e) => this.searchByStatus(e)}
              onKeyDown={(e) => this.searchByStatus(e)}
            />
            <SearchBox
              placeholder="Search by species..."
              onChange={(e) => this.searchBySpecies(e)}
              onKeyDown={(e) => this.searchBySpecies(e)}
            />
            <SearchBox
              placeholder="Search by type..."
              onChange={(e) => this.searchByType(e)}
              onKeyDown={(e) => this.searchByType(e)}
            />
            <SearchBox
              placeholder="Search by gender..."
              onChange={(e) => this.searchByGender(e)}
              onKeyDown={(e) => this.searchByGender(e)}
            />
          </div>
          <div className="card-list__cards">{this.renderCards()}</div>
          <ButtonGroup
            havePrev={this.state.prev !== null}
            haveNext={this.state.next !== null}
            onPrev={(e) => this.toPrevPage(e)}
            onNext={(e) => this.toNextPage(e)}
          />
        </section>
      );
    }
  }

  componentDidMount() {
    let response = api.get("");
    response
      .then((data) =>
        this.setState({
          isLoaded: true,
          error: "",
          characters: data.data.results,
          next: data.data.info.next,
          prev: data.data.info.prev,
        })
      )
      .catch((err) =>
        this.setState({
          error: err.message,
        })
      );
  }
}

export default CardList;
