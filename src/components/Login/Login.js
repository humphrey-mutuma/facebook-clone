import { Button } from "@material-ui/core";
import { Facebook } from "@material-ui/icons";
import "./Login.css";

import { auth, provider } from "./../../firebase";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

const Login = () => {
  const [{user}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
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
