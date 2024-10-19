import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes } from "../redux/recipiSlice";
import "./RecipeList.css";

const RecipeList = () => {
  const { recipes, status } = useSelector((state) => state.recipies);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  if (status === "Loading") return <p>Loading...</p>;
  if (status === "failed") return <p>The recipe is not loaded</p>;

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div className="recipe-item">
          <img src={recipe.image} alt={recipe.title} />
          <h4>{recipe.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
