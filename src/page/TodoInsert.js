import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const AddTodo = styled.div`
  margin-top: 60px;
  padding: 0 20px;

  .textBox {
    border: 1px solid #8b8b8b;
    border-radius: 15px;
    padding: 20px;
    margin-bottom: 40px;

    input {
      display: block;
      width: 100%;
      border: 0;
      border-bottom: 1px solid #d9d9d9;
      padding: 7px 0;
    }

    textarea {
      display: block;
      width: 100%;
      height: 80px;
      border: 0;
      padding: 7px 0;
      resize: none;
    }
  }

  button {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border: 1px solid #8b8b8b;
    border-radius: 15px;
    background-color: #fff;
    padding: 16px 20px;
  }
`;

const TodoInsert = ({ inputValue, setInputValue }) => {
  const onChangeTodo = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <AddTodo>
        <form>
          <div className="textBox">
            <input
              name="todo"
              type="text"
              placeholder="할일"
              onChange={onChangeTodo}
            />
            <textarea
              name="memo"
              placeholder="메모"
              onChange={onChangeTodo}
            ></textarea>
          </div>
          <button>
            <span>날짜선택 (업데이트 준비중)</span>
            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          </button>
        </form>
      </AddTodo>
    </>
  );
};

export default TodoInsert;
