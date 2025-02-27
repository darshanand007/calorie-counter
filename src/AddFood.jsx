import React, { useState } from "react";

function AddFood({ addFoodItem }) {
  const [food, setFood] = useState({ name: "", calories: "", protein: "", carbs: "", fat: "" });

  const handleChange = (e) => {
    setFood({ ...food, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFoodItem(food);
    setFood({ name: "", calories: "", protein: "", carbs: "", fat: "" });
  };

  return (
    <div>
      <h2>Add Food Item</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Food Name" value={food.name} onChange={handleChange} required />
        <input type="number" name="calories" placeholder="Calories" value={food.calories} onChange={handleChange} required />
        <input type="number" name="protein" placeholder="Protein (g)" value={food.protein} onChange={handleChange} required />
        <input type="number" name="carbs" placeholder="Carbs (g)" value={food.carbs} onChange={handleChange} required />
        <input type="number" name="fat" placeholder="Fat (g)" value={food.fat} onChange={handleChange} required />
        <button type="submit">Add Food</button>
      </form>
    </div>
  );
}

export default AddFood;
