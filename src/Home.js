import React from "react";
import app from "./base";

const Home = () => {
  return (
    <>
      <div>Homeやで</div>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </>
  );
};
export default Home;
