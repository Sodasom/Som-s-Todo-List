import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoItem from './TodoItem';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
  faAngleLeft,
  faCirclePlus,
} from '@fortawesome/free-solid-svg-icons';

const TodoListBox = styled.div`
  margin-top: 72px;
  padding: 0 32px;

  .dateBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;

    h3 {
      font-size: 20px;
      font-weight: bold;
    }

    button {
      background-color: transparent;
      border: 0;
      font-size: 20px;
      padding: 8px;

      &:nth-child(1) {
        margin-right: 16px;
      }
    }
  }

  .finishTodo {
    font-size: 12px;
    color: #8b8b8b;
    margin-bottom: 40px;
  }

  .todoPlusButton {
    background-color: transparent;
    border: 0;
    position: fixed;
    right: 28px;
    bottom: 26px;
    font-size: 44px;
    color: #a26057;
  }
`;

const TodoList = ({ todo, setTodo }) => {
  const navigate = useNavigate();

  const [checkItems, setCheckItems] = useState([]);

  return (
    <>
      <TodoListBox>
        <div className="dateBox">
          <h3>2022년 12월 19일</h3>
          <div className="buttonBox">
            <button>
              <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
            </button>
            <button>
              <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            </button>
          </div>
        </div>
        <div className="finishTodo">{checkItems.length}개 완료됨</div>
        <TodoItem
          todo={todo}
          setTodo={setTodo}
          checkItems={checkItems}
          setCheckItems={setCheckItems}
        />
        <button className="todoPlusButton" onClick={() => navigate('/insert')}>
          <FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon>
        </button>
      </TodoListBox>
    </>
  );
};

export default TodoList;
