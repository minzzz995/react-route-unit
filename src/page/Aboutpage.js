import React from 'react';
import { useNavigate } from 'react-router-dom';

const Aboutpage = () => {
    const navigate = useNavigate();

    const goToHomapage =()=> {
        // navigate('내가 가고 싶은 곳의 주소')
        navigate('/');
    }

  return (
    <div>
      <h1>About page!</h1>
      <button onClick={goToHomapage}>Go To Homepage</button>
    </div>
  );
}

export default Aboutpage;
