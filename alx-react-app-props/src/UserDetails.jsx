import { useContext } from "react";
import React from "react";
import { UserContext } from "./components/UserContext";


function UserDetails({ userData }) {



    return (
      <div>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    );
  }
  
  export default UserDetails;