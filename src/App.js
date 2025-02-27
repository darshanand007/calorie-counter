// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
import React, { useState } from "react";
import HomePage from "./HomePage";
import AddFood from "./AddFood";
import FoodList from "./FoodList";
import About from "./About";

function App() {
  const [page, setPage] = useState("home");
  const [foodItems, setFoodItems] = useState([]);

  const navigateTo = (pageName) => {
    setPage(pageName);
  };

  const addFoodItem = (item) => {
    setFoodItems([...foodItems, item]);
  };

  return (
    <div>
      <nav>
        <button onClick={() => navigateTo("home")}>Home</button>
        <button onClick={() => navigateTo("addFood")}>Add Food</button>
        <button onClick={() => navigateTo("foodList")}>Food List</button>
        <button onClick={() => navigateTo("about")}>About</button>
      </nav>

      {page === "home" && <HomePage />}
      {page === "addFood" && <AddFood addFoodItem={addFoodItem} />}
      {page === "foodList" && <FoodList foodItems={foodItems} />}
      {page === "about" && <About />}
    </div>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./HomePage";
// import AddFood from "./AddFood";
// import FoodList from "./FoodList";
// import About from "./About";
// import Navbar from "./Navbar";
// import "./styles.css";

// const App = () => {
//     return (
//         <Router>
//             <Navbar />
//             <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/add-food" element={<AddFood />} />
//                 <Route path="/food-list" element={<FoodList />} />
//                 <Route path="/about" element={<About />} />
//             </Routes>
//         </Router>
//     );
// };

// export default App;

