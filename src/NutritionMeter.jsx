import React, { useState, useEffect } from "react";
import "./NutritionMeter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrashAlt,
  faUtensils,
  faPlus,
  faMinus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const NutritionMeter = () => {
  const defaultItemsDisplayed = [
    {
      id: 1,
      name: "Apple",
      calories: 52,
      protein: 0.26,
      carbs: 14,
      fat: 1,
      quantity: 1,
    },
    {
      id: 2,
      name: "Banana",
      calories: 89,
      protein: 1.09,
      carbs: 23,
      fat: 5,
      quantity: 1,
    },
    {
      id: 3,
      name: "Grapes",
      calories: 40,
      protein: 0.2,
      carbs: 20,
      fat: 2,
      quantity: 1,
    },
    {
      id: 4,
      name: "Orange",
      calories: 35,
      protein: 0.15,
      carbs: 25,
      fat: 4,
      quantity: 1,
    },
  ];

  const [nutritionItems, setNutritionItems] = useState(defaultItemsDisplayed);
  const [newItem, setNewItem] = useState({
    name: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
  });

  const [editItem, setEditItem] = useState(null);
  const [totalCalories, setTotalCalories] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const [inputError, setInputError] = useState(false);

  useEffect(() => {
    const calculateTotalCalories = nutritionItems.reduce(
      (total, item) => total + parseFloat(item.calories) * item.quantity,
      0
    );

    setTotalCalories(calculateTotalCalories);

    setShowWarning(calculateTotalCalories > 1000);
  }, [nutritionItems]);

  const addNutritionItem = () => {
    if (
      newItem.name &&
      newItem.calories >= 0 &&
      newItem.protein >= 0 &&
      newItem.carbs >= 0 &&
      newItem.fat >= 0
    ) {
      setNutritionItems([
        ...nutritionItems,
        { ...newItem, id: Date.now(), quantity: 1 },
      ]);
      setNewItem({ name: "", calories: "", protein: "", carbs: "", fat: "" });
      setInputError(false);
    } else {
      setInputError(true);
    }
  };

  const removeAllItems = () => {
    setNutritionItems([]);
  };

  const editItemFunction = (item) => {
    setEditItem(item.id);
    setNewItem({ ...item });
  };

  const updateItemFunction = () => {
    if (
      newItem.name &&
      newItem.calories >= 0 &&
      newItem.protein >= 0 &&
      newItem.carbs >= 0 &&
      newItem.fat >= 0
    ) {
      const updatedItems = nutritionItems.map((item) =>
        item.id === newItem.id ? newItem : item
      );
      setNutritionItems(updatedItems);
      setNewItem({ name: "", calories: "", protein: "", carbs: "", fat: "" });
      setEditItem(null);
      setInputError(false);
    } else {
      setInputError(true);
    }
  };

  const deleteItemFunction = (id) => {
    setNutritionItems(nutritionItems.filter((item) => item.id !== id));
  };

  const updateItemQuantity = (id, change) => {
    setNutritionItems(
      nutritionItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity + change, 1) } : item
      )
    );
  };

  return (
    <div className="bg-green-200 min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold text-center mb-4">GeeksforGeeks Nutrition Meter</h1>
        {showWarning && (
          <div className="bg-red-500 text-white p-2 rounded-md text-center mb-4">
            <FontAwesomeIcon icon={faTimes} className="mr-2" />
            Total calories exceed recommended limit (1000 calories)!
          </div>
        )}
        <button className="bg-red-600 text-white p-3 rounded-md font-semibold mb-4" onClick={removeAllItems}>
          Clear All
        </button>
      </div>
    </div>
  );
};

export default NutritionMeter;
