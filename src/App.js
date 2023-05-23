// DEPENDENCIES
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button}from "react-bootstrap";

// PAGES
import EditCategory from "./Pages/EditCategory"
import Home from "./Pages/Home"

// import Index from "./Pages/Index"
import NewCategory from "./Pages/NewCategory"
import Women from "./Components/CategoryIdByWomen"
import Men from "./Components/categoryByMen"
import Kid from "./Components/CategoryIdByKids"
import ProductNewForm from "./Components/ProductNewForm"
import ProductDetails from "./Components/ProductDetails"


// import Women from "./Pages/Women"

//Components
import NavBar from "./Components/NavBar"

function App() {
  return (
    <div className="App">
     
       <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<ProductDetails />} /> 
            {/* <Route path="/category" element={<Index />} /> */}
            <Route exact path="/category/woman" element={<Women/>} /> 
            <Route exact path="/category/men" element={<Men/>} /> 
            <Route exact path="/category/kids" element={<Kid/>} /> 
            <Route path="category/:categoryId/products/new" element={<ProductNewForm />} /> 
            <Route path="/category/new" element={<NewCategory />} />
            <Route path="/category/:categoryId/edit" element={<EditCategory/>} />
            {/* <Route path="*" element={<FourOFour />} /> */}
          </Routes>
        </main>

        
       </Router>
       
    </div>
  );
}

export default App;
