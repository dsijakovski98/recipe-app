import React, { Component } from "react";
import style from "../css-modules/search_bar.module.css";
import axios from "axios";

const APP_ID = process.env.REACT_APP_ID;
const APP_KEY = process.env.REACT_APP_KEY;
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
    };
  }

  componentDidMount() {
    this.getRecipes("chicken");
  }

  updateSearch = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    this.getRecipes();
  };

  getRecipes = (def = "") => {
    let search = "";
    if (def.length) {
      search = def;
    } else {
      search = this.state.search;
    }
    const api_link = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    axios
      .get(api_link)
      .then((response) => {
        const recipes = response.data.hits;
        this.props.setGlobalRecipes(recipes);
      })
      .catch((error) => console.log);
  };

  render() {
    const { search } = this.state;
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <div>
            <input
              className={style.searchBar}
              type="text"
              name="search"
              placeholder="Search for recipes..."
              value={search}
              onChange={this.updateSearch}
            />
            <button className={style.searchButton} type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
