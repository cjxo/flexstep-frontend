import { Link } from "react-router-dom";
import { useState } from "react";
import DotLoader from "../components/DotLoader";
import { useAuth } from "../context/Auth";
import routesStyles from "../styles/routes.module.css";

const LogInPage = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const fd = new FormData(e.target);
    const email = fd.get("email");
    const password = fd.get("password");

    setIsLoading(true);
    auth
      .login(email, password)
      .then(result => {
        if (!result.ok) {
          setError(result.message);
        } else {
          setError("");
          e.target.reset();
        }

        setIsLoading(false);
      });
  };

  return (
    <div className={routesStyles.authPage}>
      <h2>Log In to Your Account</h2>
      <p>Or, <Link to="/sign-up">sign up for a new account</Link></p>

      <form className="common-form-design" onSubmit={handleSubmit}>
        <div className="label-input-pair">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="label-input-pair">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>

        <p className={`error-msg ${error ? "visible" : ""}`}>{error}</p>
        <button disabled={isLoading} className="common-button-style0">
          {isLoading ? <DotLoader label="Loading" /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default LogInPage;
