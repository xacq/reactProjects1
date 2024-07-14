import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = user => {
    if (!favorites.find(fav => fav.id === user.id)) {
      setFavorites([...favorites, user]);
      toast.success(`${user.first_name} se ha añadido a favoritos`);
    } else {
      toast.info(`${user.first_name} ya está en favoritos`);
    }
  };

  const removeFromFavorites = user => {
    setFavorites(favorites.filter(fav => fav.id !== user.id));
    toast.warn(`${user.first_name} se ha eliminado de favoritos`);
  };

  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route path="/" element={<Home addToFavorites={addToFavorites} />} />
          <Route path="/favorites" element={<Favorites favorites={favorites} removeFromFavorites={removeFromFavorites} />} />
        </Routes>
        <ToastContainer />
      </AppContainer>
    </Router>
  );
};

const AppContainer = styled.div`
  background-color:orangered;
  color:black;
  padding: 20px;
  text-align: center;
`;

export default App;
