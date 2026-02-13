import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import DotLoader from "../components/DotLoader";
import api from "../lib/api";
import routesStyles from "../styles/routes.module.css";

const LogInPage = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const fd = new FormData(e.target);
    const email = fd.get("email");
    const password = fd.get("password");

    setIsLoading(true);
    api
      .user
      .login(email, password)
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
      <h2>Log In to Your Account</h2>
      <p>Or, <Link to="/log-in">sign up for a new account</Link></p>

      <form onSubmit={handleSubmit}>
        <div className="label-input-pair">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="label-input-pair">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>

        <p className={`${routesStyles.errorMsg} ${error ? routesStyles.visible : ""}`}>{error}</p>
        <button disabled={isLoading} className="common-button-style0">
          {isLoading ? <DotLoader label="Loading" /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default LogInPage;
