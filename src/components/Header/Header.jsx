import { NavLink } from 'react-router-dom';

import items from './items';

import css from './Header.module.css';

const getFullName = ({ isActive }) => {
  return isActive ? `${css.link} ${css.active}` : `${css.link}`;
};

const Header = () => {

  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={getFullName} to={link}>
        {text}
      </NavLink>
    </li>
  ));

  return (
      <ul className={css.header}>{elements}</ul>
  );
};

export default Header;
