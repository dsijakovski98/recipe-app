import "./App.css";
import React from "react";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
    };
  }

  setRecipes = (r) => {
    this.setState({
      recipes: r,
    });
  };

  render() {
    return (
      <div className="App">
        <div
          id="edamam-badge"
          data-color="white"
          style={{ display: "inline" }}
        ></div>
        <h1 className="headline">My Recipe App</h1>
        <SearchBar setGlobalRecipes={this.setRecipes}></SearchBar>
        <hr />
        <RecipeList recipes={this.state.recipes}></RecipeList>
      </div>
    );
  }
}

export default App;
