import React from "react";
import { FaSearchengin } from "react-icons/fa";

class SearchBox extends React.Component {
  render() {
    return (
      <div className="card-list__search-group__search-box">
        <FaSearchengin className="card-list__search-group__search-box__search-icon" />
        <input
          type="text"
          className="card-list__search-group__search-box__input"
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          onKeyDown={this.props.onKeyDown}
        />
      </div>
    );
  }
}

export default SearchBox;
