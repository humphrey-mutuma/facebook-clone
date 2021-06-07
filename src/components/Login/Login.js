import { Button, Link } from "@material-ui/core";
import { Facebook } from "@material-ui/icons";
import "./Login.css";
const Login = () => {
  return (
    <div className="login">
      <article>
        <Facebook className="login__logo" color="primary" />
        <p>Facebook</p>
        <Button className="login__btn" variant="outlined" color="primary">
          Login to Facebook
        </Button>
      </article>
    </div>
  );
};

export default Login;
