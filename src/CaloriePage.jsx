import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CaloriePage = () => {
  const [addedFoods, setAddedFoods] = useState(
    JSON.parse(localStorage.getItem('addedFoods')) || []
  );

  useEffect(() => {
    localStorage.setItem('addedFoods', JSON.stringify(addedFoods));
  }, [addedFoods]);

  const updateQuantity = (foodId, change) => {
    setAddedFoods(prevFoods =>
      prevFoods.map(food =>
        food.id === foodId ? { ...food, quantity: Math.max(food.quantity + change, 0) } : food
      ).filter(food => food.quantity > 0)
    );
  };

  const totalCalories = addedFoods.reduce((total, food) => total + (food.calories * food.quantity), 0);

  return (
    <div className="App">
      <div className="about-us-button">
        <Link to="/about">
          <button>About Us</button>
        </Link>
      </div>
      <h1>Calorie Tracker</h1>
      <div className="food-box-container">
        {addedFoods.length > 0 ? (
          addedFoods.map(food => (
            <div key={food.id} className="food-box">
              <img src={food.image} alt={food.name} />
              <h4>{food.name}</h4>
              <p>{food.calories} Calories</p>
              <p>Quantity: {food.quantity}</p>
              <button onClick={() => updateQuantity(food.id, 1)}>+</button>
              <button onClick={() => updateQuantity(food.id, -1)}>-</button>
            </div>
          ))
        ) : (
          <p>No foods added yet.</p>
        )}
      </div>
      <div className="total-calories">
        <h3>Total Calories: {totalCalories} kcal</h3>
      </div>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default CaloriePage;