import { Link } from "react-router-dom";
import routesStyles from "../styles/routes.module.css";
const SignUpPage = () => {
  return (
    <div className={routesStyles.authPage}>
      <h2>Create a New Account</h2>
      <p>Or, <Link to="/log-in">sign in to an existing account</Link></p>

      <form>
        <div className="label-input-pair">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>

        <div className="label-input-pair">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" required />
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
          <label htmlFor="confPassword">Confirm Password</label>
          <input type="password" id="confPassword" name="confPassword" required />
        </div>

        <button className="common-button-style0">Submit</button>
      </form>
    </div>
  );
};

export default SignUpPage;
