import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav>
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate("/add-food")}>Add Food</button>
            <button onClick={() => navigate("/food-list")}>Food List</button>
            <button onClick={() => navigate("/about")}>About</button>
        </nav>
    );
};

export default Navbar;
