import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

export const PageNavLink = ({ to, text }) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames(
      'navbar__link', { 'navbar__link--active': isActive },
    )}
  >
    {text}
  </NavLink>
);