import React from "react";

function FoodList({ foodItems }) {
  return (
    <div>
      <h2>Food List</h2>
      {foodItems.length === 0 ? (
        <p>No food items added yet.</p>
      ) : (
        <ul>
          {foodItems.map((food, index) => (
            <li key={index}>
              {food.name} - {food.calories} Calories | Protein: {food.protein}g | Carbs: {food.carbs}g | Fat: {food.fat}g
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FoodList;
