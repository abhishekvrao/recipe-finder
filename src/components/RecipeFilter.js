import { useDispatch } from "react-redux";
import { setFilter, fetchRecipes } from "../redux/recipiSlice";
import "./RecipeFilter.css"
const RecipeFilter = () => {
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    const { name, value } = e.target;
    dispatch(setFilter({ [name]: value }));
    dispatch(fetchRecipes());
  };

  return (
    <div className="recipe-filter">
      <h4>Recipe Filter</h4>
      <select name="cousine" onChange={handleFilter}>
        <option value="italian">Italian</option>
        <option value="mexicon">Mexicon</option>
        <option value="indain">Indain</option>
      </select>
      <select name="diet" onChange={handleFilter}>
        <option value="vegitarion">Vegitarian</option>
        <option value="vegan">Vegan</option>
      </select>
      <select name="ingredient" onChange={handleFilter}>
        <option value="spicy">Spicy</option>
        <option value="salty">Salty</option>
      </select>
    </div>
  );
};

export default RecipeFilter;