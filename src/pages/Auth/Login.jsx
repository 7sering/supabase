import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import { useAuth } from "../../context/AuthContext";
import { useRef, useState } from "react";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  let navigate = useNavigate();

  const { signIn } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const { error } = await signIn({ email, password });
    if (error) {
      setError(error);
      setMessage("error with email and password please check again");
      return;
    }
    navigate("/");
    window.location.reload();
  }
  return (
    <>
      <div className="text-center div">
        <form className="form-signin" onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            ref={emailRef}
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required
          />
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            ref={passwordRef}
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
          />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" defaultValue="remember-me" /> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
          <br />
          <Link to="/signup">Don&apos;t have an account? Sign up</Link>
        </form>

        {message ? <p>{message}</p> : ""}
      </div>
    </>
  );
}

export default Login;
