import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'


const Friend = ({friend}) => {
  const {id, name,email,username, website} = friend;
  return (
    <div className="friend-all">
      <div className="friend">
        <h1>{name}</h1>
        <h3>Email: {email}</h3>
        <h2>
          u-name:<Link to={`/friend/${id}`} >{username}</Link> 
        </h2>
        <h3>Website: {website}</h3>
      </div>
    </div>
  );
};

export default Friend;