import RecipeFilter from './components/RecipeFilter';
import SearchRecipe from './components/SearchRecipe';
import RecipeList from './components/RecipeList';
import store from "./redux/store";
import { Provider } from 'react-redux';
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <SearchRecipe />
     <RecipeFilter />
     <RecipeList />
    </div>
    </Provider>
  );
}

export default App;
