import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


export const PageNavLink = ({ to, text }) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames(
      'navbar__link', { 'navbar__link--active': isActive },
    )}
  >
    <p>{text}</p> 
  </NavLink>
);

PageNavLink.prototype = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};