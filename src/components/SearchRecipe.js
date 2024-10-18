import { useState } from "react";
import { fetchRecipes } from "../redux/recipiSlice";
import { useDispatch } from "react-redux";
import "./searchRecipe.css";

const SearchRecipe = () => {
  const [searchParam, setSearchParam] = useState({
    cousine: "",
    ingredient: "",
    diet: "",
  });
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(fetchRecipes(searchParam));
  };

  return (
    <div className="recipe-search">
      <h1>Recipe Finder</h1>
      <input
        type="text"
        placeholder="ingredient"
        value={searchParam.ingredient}
        onChange={(e) =>
          setSearchParam({ ...searchParam, ingredient: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="cousine"
        value={searchParam.cousine}
        onChange={(e) => {
          setSearchParam({ ...searchParam, cousine: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="diet"
        value={searchParam.diet}
        onChange={(e) => {
          setSearchParam({ ...searchParam, diet: e.target.value });
        }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchRecipe;
