import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const TodoItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;

  input {
    display: none;
  }

  .incompleteTodo {
    font-size: 20px;
    color: #d76969;
  }

  .todoContent {
    width: 100%;
    margin-left: 12px;
    border-bottom: 1px solid #d9d9d9;
    padding-bottom: 16px;

    h4 {
      margin-bottom: 8px;
    }

    p {
      font-size: 12px;
      color: #8b8b8b;
    }
  }

  button {
    background-color: transparent;
    border: 0;
    font-size: 20px;
    color: #d76969;
  }
`;

const TodoItem = ({ todo, setTodo }) => {
  const deleteTodo = (id) => {
    const filterData = todo.filter((list) => list.id !== id);
    setTodo(filterData);
  };
  return (
    <>
      {todo.map((list) => (
        <TodoItems>
          <label>
            <input type="checkbox" />
            <FontAwesomeIcon
              className="incompleteTodo"
              icon={faHeart}
            ></FontAwesomeIcon>
          </label>
          <div className="todoContent">
            <h4>{list.todo}</h4>
            <p>{list.memo}</p>
          </div>
          <button onClick={() => deleteTodo(list.id)}>
            <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
          </button>
        </TodoItems>
      ))}
    </>
  );
};

export default TodoItem;
