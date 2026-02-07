import { NavLink, Link } from "react-router-dom";

// https://reactrouter.com/api/components/NavLink
const ActiveLink0 = ({ to, children, ...rest }) => {
  return (
    <NavLink
      to={to}
      className={({isActive}) => {
        const result = "";
        return `common-link-style0 ${result}`;
      }}
      {...rest}
    >
      {children}
    </NavLink>
  );
};

const ButtonLink = ({ to, children, ...rest }) => {
  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  );
};

const ExternalLink = ({ href, children, ...rest }) => {
  return (
    <a
      href={href}
      rel="noreferrer"
      target="_blank"
      {...rest}
    >
      {children}
    </a>
  );
};

export {
  ActiveLink0,
  ButtonLink,
  ExternalLink,
};
