import React, { Component } from "react";
import Recipe from "./Recipe";
import { v4 as uuidv4 } from "uuid";

export class RecipeList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { recipes } = this.props;
    return (
      <div>
        {recipes.length
          ? recipes.map((r) => {
              return (
                <Recipe
                  key={uuidv4()}
                  title={r.recipe.label}
                  ingredients={r.recipe.ingredientLines}
                  calories={r.recipe.calories}
                  image={r.recipe.image}
                ></Recipe>
              );
            })
          : null}
      </div>
    );
  }
}

export default RecipeList;
