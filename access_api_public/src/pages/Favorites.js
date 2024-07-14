import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Favorites = ({ favorites, removeFromFavorites }) => {
  return (
    <div>
      <h1>Lista de Favoritos</h1>
      <h4>Dar un click sobre una foto y se eliminara</h4>
      <h3><Link to="/">Regrese al Inicio</Link></h3>
      <UserList>
        {favorites.map(user => (
          <UserCard key={user.id} onClick={() => removeFromFavorites(user)}>
            <img src={user.avatar} alt={user.first_name} />
            <p>{user.first_name} {user.last_name}</p>
            <p>{user.email}</p>
          </UserCard>
        ))}
      </UserList>

    </div>
  );
};

const UserList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const UserCard = styled.div`
  width: 200px;
  padding: 5px;
  border: 3px solid yellow;
  margin: 10px;
  text-align: center;
  cursor: pointer;  
  background-color: orange;
  border-radius: 10%;

  img {
    width: 50%;
    border-radius: 25%;
    border: 3px solid orangered;
  }

  p {
    margin: 10px;
  }
`;


export default Favorites;
