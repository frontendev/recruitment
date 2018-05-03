import React, { Component } from 'react';
import './style.sass'

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: "",
    };
    this.handlerChange = this.handlerChange.bind(this);
  }

  handlerChange(e) {
    this.setState({
      value: e.target.value,
    });
    this.props.setFilter("name", e.target.value, "");
  }

  render() {
    return (
      <div className="ui-search">
        <h3>Search</h3>
        <input
          aria-label="Searach animal"
          minLength="2"
          name="q"
          onChange={this.handlerChange}
          placeholder="Search animal"
          type="search"
          value={this.state.value}
        />
      </div>
    )
  }
}

export default Search;
