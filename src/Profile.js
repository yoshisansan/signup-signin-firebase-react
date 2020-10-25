import React from "react";
import app from "./base";

const Profile = () => {
  return (
    <>
      <div>Profileやで</div>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </>
  );
};
export default Profile;