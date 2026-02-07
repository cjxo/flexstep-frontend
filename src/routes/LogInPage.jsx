import { Link } from "react-router-dom";
import routesStyles from "../styles/routes.module.css";
const LogInPage = () => {
  return (
    <div className={routesStyles.authPage}>
      <h2>Log In to Your Account</h2>
      <p>Or, <Link to="/log-in">sign up for a new account</Link></p>

      <form>
        <div className="label-input-pair">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="label-input-pair">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>

        <button className="common-button-style0">Submit</button>
      </form>
    </div>
  );
};

export default LogInPage;
