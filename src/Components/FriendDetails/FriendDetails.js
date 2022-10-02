import React from 'react';
import { useLoaderData } from 'react-router-dom';
import'./FriendDetails.css'

const FriendDetails = () => {
  const friend = useLoaderData();
  const {name,phone,email, address,company,website} = friend;
  return (
    <div>
      <div className="details">
        <h2>Know about : {name}</h2>
        <h4>Contact: {phone}</h4>
        <h4>Email: {email}</h4>
        <h3> Here Address:{address.street}</h3>
        <h3>City:{address.city}</h3>
        <h3>Company Name Here: {company.name}</h3>
        <h3>CatchPhrase: {company.catchPhrase}</h3>
        <h3>Bs: {company.bs}</h3>
        <h3> Website: {website}</h3>
      </div>
    </div>
  );
};

export default FriendDetails;