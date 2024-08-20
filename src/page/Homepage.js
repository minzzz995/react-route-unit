import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Homepage = () => {
    const navigate = useNavigate();
    const goProductPage = () => {
        navigate("/products?q=pants");
    };
    
  return (
    <div>
      <h1>Home page!</h1>
      <Link to="/about"> Go To About Page</Link>
      <button onClick={goProductPage}>go to product page</button>
    </div>
  );
}

export default Homepage;