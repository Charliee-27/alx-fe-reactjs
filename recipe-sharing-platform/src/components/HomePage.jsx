import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import recipeData from '../data.json'; // Adjust the path as needed

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Set the data from the imported JSON file
    setRecipes(recipeData);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recipes.map(recipe => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="bg-white rounded shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{recipe.title}</h2>
              <p className="text-gray-700">{recipe.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
