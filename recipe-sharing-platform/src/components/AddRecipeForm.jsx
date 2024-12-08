import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simple validation
    if (!title || !ingredients || !instructions) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    // Handle form submission logic here, such as sending data to a server or updating the state
    console.log({ title, ingredients, instructions });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="title">Recipe Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="ingredients">Ingredients</label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
