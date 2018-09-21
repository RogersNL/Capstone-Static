import React from 'react';
import { Link } from 'react-router-dom';

function Admin(){
  return (
    <div>
      <h2>Admin</h2>
      <div><Link to="new-item">Add A New Item</Link></div>
      <div><Link to="user-accounts">See User Accounts</Link></div>
    </div>
  );
}

export default Admin;
