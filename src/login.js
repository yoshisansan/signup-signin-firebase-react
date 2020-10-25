import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { Link } from "react-router-dom";
import app from "./base.js";
import { AuthContext, signInWithGoogle, signInWithTwitter, signInWithFacebook } from "./Auth.js";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    //ここに登録直後だけプロフィールページに飛ばす処理をかく
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
      <button onClick={() => signInWithGoogle()}>Googleアカウントでログイン</button>
      <button onClick={() => signInWithTwitter()}>Twitterアカウントでログイン</button>
      <button onClick={() => signInWithFacebook()}>Facebookアカウントでログイン</button>
        <div>
          <Link to="/signup">サインアップ</Link>
        </div>
    </div>
  );
};

export default withRouter(Login);
