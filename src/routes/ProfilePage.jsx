import { useState } from "react";
import { useAuth } from "../context/Auth";
import DotLoader from "../components/DotLoader";
import routesStyles from "../styles/routes.module.css";

const ProfilePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const auth = useAuth();
  const user = auth.user;
  const date = user?.joined_date && new Date(user?.joined_date).toLocaleString();

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target.parentElement.parentElement;
    
    const fd = new FormData(form);
    const first_name = fd.get("first_name");
    const last_name = fd.get("last_name");
    const username = fd.get("username");
    const email = fd.get("email");
    const password = fd.get("password");
    const conf_password = fd.get("conf_password");

    setIsLoading(true);
    auth
      .update(first_name, last_name, username, email)
      .then(result => {
        if (!result.ok) {
          console.log(result.message);
          setError(result.message);
          setSuccess("");
        } else {
          setError("");
          setSuccess(result.message);
        }
        setIsLoading(false);
      });
  };

  return (
    <div className={routesStyles.profileDisplay}>
      <div className={routesStyles.profileHeader}>
        <div className={routesStyles.profilePic}></div>
        <h2>{user?.username}</h2>
      </div>
      <form className="common-form-design" onSubmit={handleUpdate}>
        <div className="label-input-pair">
          <label htmlFor="first_name">First Name</label>
          <input type="text" id="first_name" name="first_name" defaultValue={user?.first_name} required />
        </div>

        <div className="label-input-pair">
          <label htmlFor="last_name">Last Name</label>
          <input type="text" id="last_name" name="last_name" defaultValue={user?.last_name} required />
        </div>

        <div className="label-input-pair">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" defaultValue={user?.username} required />
        </div>

        <div className="label-input-pair">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" defaultValue={user?.email} required />
        </div>

        <div className="label-input-pair">
          <label htmlFor="date_joined">Date Joined</label>
          <input readOnly className="immutable" type="text" id="date_joined" name="date_joined" defaultValue={date} required />
        </div>

        <p className={`error-msg ${error ? "visible" : ""}`}>{error}</p>
        <p className={`success-msg ${success ? "visible" : ""}`}>{success}</p>
        <div className="mutation-buttons">
          <button className="destructive-button common-button-style0" type="button">
            Delete Account
          </button>
          <button disabled={isLoading} className="common-button-style0" onClick={handleUpdate}>
            {isLoading ? <DotLoader label="Loading" /> : "Update Account"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
