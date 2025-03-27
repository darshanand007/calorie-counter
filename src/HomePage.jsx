import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const foods = [
    { id: 1, name: 'Pizza', image: 'https://rp-media.faasos.io/catalog/images/KRNP2FPUEY9A.jpeg', calories: 250 },
    { id: 2, name: 'Burger', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/53e06d45-6618-4cd0-945d-145730f45990_319869.jpg', calories: 300 },
    { id: 3, name: 'Apple', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS_Db0jJvWe6vYScLksI8qoM2WCeHfJnSBVw&s', calories: 95 },
  ];

  const addFood = (food) => {
    let addedFoods = JSON.parse(localStorage.getItem('addedFoods')) || [];
    const existingFood = addedFoods.find(item => item.id === food.id);
    if (existingFood) {
      existingFood.quantity += 1;
    } else {
      addedFoods.push({ ...food, quantity: 1 });
    }
    localStorage.setItem('addedFoods', JSON.stringify(addedFoods));
  };

  return (
    <div className="App">
      <div className="about-us-button">
        <Link to="/about">
          <button>About Us</button>
        </Link>
      </div>
      <div className="login-button">
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
      <h1>Food Calorie Tracker</h1>
      <div className="food-box-container">
        {foods.map(food => (
          <div key={food.id} className="food-box">
            <img src={food.image} alt={food.name} />
            <h4>{food.name}</h4>
            <p>{food.calories} Calories</p>
            <button onClick={() => addFood(food)}>Add Food</button>
          </div>
        ))}
      </div>
      <Link to="/calories">
        <button>Go to Calorie Page</button>
      </Link>
    </div>
  );
};

export default HomePage;
