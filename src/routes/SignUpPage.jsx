import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import DotLoader from "../components/DotLoader";
import api from "../lib/api";
import routesStyles from "../styles/routes.module.css";

const SignUpPage = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData(e.target);
    const first_name = fd.get("first_name");
    const last_name = fd.get("last_name");
    const username = fd.get("username");
    const email = fd.get("email");
    const password = fd.get("password");
    const conf_password = fd.get("conf_password");

    if (password !== conf_password) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      setError("Password length must be at least 8");
      return;
    }

    setIsLoading(true);
    api
      .user
      .insert(first_name, last_name, username, password, email)
      .then(result => {
        if (!result.ok) {
          setError(result.message);
        } else {
          setError("");
          e.target.reset();
          navigate("/");
        }

        setIsLoading(false);
      });
  };

  return (
    <div className={routesStyles.authPage}>
      <h2>Create a New Account</h2>
      <p>Or, <Link to="/log-in">sign in to an existing account</Link></p>

      <form onSubmit={handleSubmit}>
        <div className="label-input-pair">
          <label htmlFor="first_name">First Name</label>
          <input type="text" id="first_name" name="first_name" required />
        </div>

        <div className="label-input-pair">
          <label htmlFor="last_name">Last Name</label>
          <input type="text" id="last_name" name="last_name" required />
        </div>

        <div className="label-input-pair">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>

        <div className="label-input-pair">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="label-input-pair">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>

        <div className="label-input-pair">
          <label htmlFor="conf_password">Confirm Password</label>
          <input type="password" id="conf_password" name="conf_password" required />
        </div>

        <p className={`${routesStyles.errorMsg} ${error ? routesStyles.visible : ""}`}>{error}</p>
        <button disabled={isLoading} className="common-button-style0">
          {isLoading ? <DotLoader label="Loading" /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
