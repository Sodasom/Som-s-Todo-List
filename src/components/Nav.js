import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const MenuBar = styled.nav`
  width: 70%;
  height: 100vh;
  background-color: #a26057;
  position: fixed;
  right: -70%;
  transition: right 0.3s;

  &.open {
    right: 0;
  }

  ul {
    list-style-type: none;
    text-align: right;
    color: #fff;
    font-weight: bold;
    font-size: 25px;
    padding-right: 20px;
  }

  li {
    margin-top: 40px;
  }

  .active {
    color: #fcccb8;
  }
`;

let pathName = '';

const Nav = ({ menu, setMenu }) => {
  let location = useLocation();

  useEffect(() => {
    if (pathName.indexOf('/') === 0) {
      pathName = '';
      setMenu(false);
    } else {
      setMenu(!menu);
    }

    pathName = location.pathname;
  }, [location]);

  return (
    <MenuBar className={menu ? 'open' : ''}>
      <ul>
        <li>
          <NavLink to="/calendar" activeClassName="active">
            calendar
          </NavLink>
        </li>
        <li>
          <NavLink to="/list" activeClassName="active">
            to-do list
          </NavLink>
        </li>
      </ul>
    </MenuBar>
  );
};

export default Nav;
