import styles from "./styles/components.module.css";

const CommonLink0 = ({href,children}) => {
  return (
    <a href={href} className="common-link-style0">{children}</a>
  );
};

// https://dribbble.com/shots/19404226-Shoes-Web-UI
const WideTopBar = () => {
  return (
    <nav className={styles.wideNav}>
      <h1 className={styles.h1FlexTitle}>
        <a href="/">FlexStep</a>
      </h1>
      <ul className={styles.ulHorizontal}>
        <li>
          <CommonLink0 href="#">
            Collections
          </CommonLink0>
        </li>

        <li>
          <CommonLink0 href="#">
            Contact Us
          </CommonLink0>
        </li>

        <li>
          <CommonLink0 href="#">
            About Us
          </CommonLink0>
        </li>
      </ul>

      <ul className={`${styles.ulHorizontal} ${styles.ulLoginSignup}`}>
        <li>
          <CommonLink0 href="#">
            Log In
          </CommonLink0>
        </li>

        <li>
          <CommonLink0 href="#">
            Sign Up
          </CommonLink0>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <main className="common-container0">
      <WideTopBar />
    </main>
  );
};

export default App;
