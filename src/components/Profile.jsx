import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  const handleProfileClick = () => {
    toast.success(`Logged in as ${user.name}`);
  };

  return (
    isAuthenticated && (
      <div className="profile-container">
        <img
          src={user.picture}
          alt={user.name}
          id="profile-picture"
          onClick={handleProfileClick}
        ></img>
        <h2 id="username">{user.name}</h2>
      </div>
    )
  );
};

export default Profile;
