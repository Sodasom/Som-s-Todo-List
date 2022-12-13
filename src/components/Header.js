import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';

const HeaderMenu = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #a26057;
  padding: 0 20px;

  h1 {
    color: #fff;
    font-size: 25px;
    font-weight: bold;
    flex-shrink: 0;
  }

  button {
    background-color: transparent;
    border: 0;
  }

  .svg-inline--fa {
    color: #fff;
    font-size: 20px;
  }
`;

const HeaderMenuText = styled(HeaderMenu)`
  background-color: #fff;

  h1 {
    color: #000;
    font-size: 22px;
  }

  button {
    font-size: 18px;
  }

  .cancelButton {
    color: #d76969;
  }
`;

const Header = ({ menu, setMenu, inputValue, todo, setTodo }) => {
  let location = useLocation();
  let navigate = useNavigate();

  const addList = (e) => {
    setTodo([
      ...todo,
      {
        id: todo.length,
        todo: inputValue.todo,
        memo: inputValue.memo,
        checked: false,
      },
    ]);
    navigate('/list');
  };

  return (
    <>
      {location.pathname !== '/insert' ? (
        <HeaderMenu>
          <h1>to-do</h1>
          <button onClick={() => setMenu(!menu)}>
            <FontAwesomeIcon icon={menu ? faX : faBars} />
          </button>
        </HeaderMenu>
      ) : (
        <HeaderMenuText>
          <button className="cancelButton" onClick={() => navigate('/list')}>
            취소
          </button>
          <h1>새로운 to-do</h1>
          <button onClick={(e) => addList(e)}>추가</button>
        </HeaderMenuText>
      )}
    </>
  );
};

export default Header;
