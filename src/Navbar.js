import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      {/* Without the use of a react router dom */}
      {/* <a href="/" className="site-title">
        Citizens
      </a>
      <ul>
        <CustomLink href="/pricing">Pricing</CustomLink>
        <CustomLink href="/about">About</CustomLink>
      </ul> */}
      <Link to="/" className="site-title">
        Citizens
      </Link>
      <ul>
        <CustomLink to="/pricing">Pricing</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
    </nav>
  );
}
//Without the react router dom, the 'href' is used instead of 'to'
function CustomLink({ to, children, ...props }) {
  // const path = window.location.pathname;

  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    // <li className={path === to ? "active" : ""}>
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
