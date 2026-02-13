import {
  ActiveLink0,
  ButtonLink,
} from "./Commons.jsx";

import { Link } from "react-router-dom";
import { useAuth } from "../context/Auth";
import styles from "../styles/components.module.css";

// https://dribbble.com/shots/19404226-Shoes-Web-UI
const WideTopBar = () => {
  const auth = useAuth();

  const handleSignOut = () => {
    auth
      .signout()
      .then(result => {
        console.log(result);
      });
  };

  return (
    <nav className={styles.wideNav}>
      <h1 className={`${styles.h1FlexTitle} flexstep-logo`}>
        <Link to="/">FlexStep</Link>
      </h1>
      <ul className={styles.ulHorizontal}>
        <li>
          <ActiveLink0 to="/collections">
            Collections
          </ActiveLink0>
        </li>

        <li>
          <ActiveLink0 to="/contact-us">
            Contact Us
          </ActiveLink0>
        </li>

        <li>
          <ActiveLink0 to="/about-us">
            About Us
          </ActiveLink0>
        </li>

        <li>
          <ActiveLink0 to={auth.isAuth ? "/profile" : "/log-in"}>
            {auth.isAuth ? "Profile" : "Log In"}
          </ActiveLink0>
        </li>

        <li>
          {!auth.isAuth ? (<ButtonLink to="/sign-up" className="common-button-style0">
            Sign Up
          </ButtonLink>) : (<button onClick={handleSignOut} className="common-button-style0">
            Sign Out
          </button>)}
        </li>
      </ul>
    </nav>
  );
};

export default WideTopBar;
