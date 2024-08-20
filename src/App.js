import './App.css';
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
// Navigate는 useNavigate와 다름(Navigate : 컴포넌트(redirect하게 도와줌)/useNavigate : react hook function)
import { Routes, Route, Navigate } from 'react-router-dom';
import Productpage from './page/Productpage';
import ProductDetailPage from './page/ProductDetailPage';
import LoginPage from './page/LoginPage';
import { useState } from 'react';
import UserPage from './page/UserPage';

function App() {

  const [authenticate, setAuthenticate]=useState(false)

  // PricateRoute -> 컴포넌트(대문자로 시작하므로)
  const PricateRoute =()=>{
    return authenticate == true? <UserPage/>:<Navigate to = "/login"/>
  }

  return (
    <div>
      {/* route : 각각의 page를 스위치하는 역할 */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/products" element={<Productpage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<PricateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
