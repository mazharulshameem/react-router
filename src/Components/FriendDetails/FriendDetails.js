import React from 'react';
import { useLoaderData } from 'react-router-dom';
import'./FriendDetails.css'

const FriendDetails = () => {
  const friend = useLoaderData();
  const {name,phone,address,company,website} = friend;
  return (
    <div>
      <div className='details'>
        <h2>{name}</h2>
        <h4>Contact: {phone}</h4>
        <h3>Address:{address.street}</h3>
        <h3>Company: {company.name}</h3>
        <h3> Website: {website}</h3>
      </div>
    </div>
  );
};

export default FriendDetails;