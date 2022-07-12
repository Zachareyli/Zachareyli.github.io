
import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';
import {Helmet} from "react-helmet";


const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  // function to search for the recipes

  const searchRecipes = async () => {
    setIsLoading(true);
    const url = apiUrl + query;
    const res = await fetch(url);
    const data =  await res.json();
    setRecipes(data.meals);
    setIsLoading(false);
  };

// Use effect fires as soon as webpage loads to show recipes

  useEffect(() =>{
    searchRecipes()
  }, []);

  // preventDefault() prevents the form from submitting

  const handleSubmit = event => {
    event.preventDefault()
    searchRecipes()
  };

  return (
    <>
    <Helmet>
        <title>Clayton's Recipe App</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
    <div className="container">
      <h1>Clayton's Recipe App</h1>
      <SearchBar
          handleSubmit={handleSubmit}
          value={query}
          onChange={event => setQuery(event.target.value)}
          isLoading={isLoading}
        />
      <div className="recipes">
        { recipes ? recipes.map(recipe => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
            />
        ))
        : 'Sorry... We\'ve Found No Recipes!'}  
      </div>
    </div>
    </>
  );
};
  

export default App;
