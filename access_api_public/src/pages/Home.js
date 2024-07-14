
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Home = ({ addToFavorites }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://reqres.in/api/users')
      .then(response => {
        setUsers(response.data.data.slice(0, 6));
      });
  }, []);

  return (
    <div>
      <h1>PERSONAS QUE TRABAJAN EN MI OFICINA</h1>
      <h4>Dar un click sobre algunos de las imagenes y se añadira a la sección de Favoritos</h4>
      <h3><Link to="/favorites">Ver Lista de Favoritos</Link></h3>
      <UserList>
        {users.map(user => (
          <UserCard key={user.id} onClick={() => addToFavorites(user)}>
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
  width: 300px;
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

export default Home;
