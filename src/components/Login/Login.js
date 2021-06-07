import { Button, Link } from "@material-ui/core";
import { Facebook } from "@material-ui/icons";
import "./Login.css";

import { auth, provider } from "./../../firebase";

const Login = () => {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((results) => {
        console.log(results);
      })
      .catch((error) => alert.log(error.message));
  };
  return (
    <div className="login">
      <article>
        <Facebook className="login__logo" color="primary" />
        <p>Facebook</p>
        <Button
          type="submit"
          onClick={signIn}
          className="login__btn"
          variant="outlined"
          color="primary"
        >
          Login to Facebook
        </Button>
      </article>
    </div>
  );
};

export default Login;
