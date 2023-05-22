import React, { useState } from "react";
import axios from "axios";
import Category from "./Category";
import { Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

export default function CategoriesDropdown() {
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      fetchCategories();
    }
  };

  const fetchCategories = () => {
    axios
      .get(`${API}/category`)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleCategoryClick = (category) => {
    // Handle the category click event here
    console.log("Category clicked:", category);
  };

  return (
    <div className="dropdown">
      <span className="category-text" onClick={toggleDropdown}>categories
      
      </span>
      {isOpen && (
        <div className="dropdown-content">
          {categories.map((category) => (
            <Category
              key={category.category_id}
              category={category}
              onClick={() => handleCategoryClick(category)}
            />
          ))}
        </div>
      )}
    </div>
  );
}