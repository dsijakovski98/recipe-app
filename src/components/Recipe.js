import React from "react";
import { v4 as uuidv4 } from "uuid";
import style from "../css-modules/recipe.module.css";

function Recipe({ title, ingredients, calories, image }) {
  return (
    <div className={style.recipeDiv}>
      <h1>{title}</h1>
      <ul className={style.ingredients}>
        <h3 className={style.ingredientsTitle}>Ingredients:</h3>
        {ingredients.map((ingredient) => (
          <li className={style.item} key={uuidv4()}>
            {ingredient}
          </li>
        ))}
        <br />
        <strong className={style.caloriesTitle}>Calories:</strong>
        <span> {calories.toFixed(2)} kcal</span>
      </ul>
      <br />
      <img className={style.recipeImage} src={image} alt="" width="200px" />
      <br />
      <br />
    </div>
  );
}

export default Recipe;
