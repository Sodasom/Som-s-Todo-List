import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDeleteLeft,
  faHeart as solidHeart,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

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

const TodoItem = ({ todo, setTodo, checkItems, setCheckItems }) => {
  const deleteTodo = (id) => {
    const filterData = todo.filter((list) => list.id !== id);
    setTodo(filterData);
  };

  const handleCheckChange = (checked, id) => {
    if (checked) {
      setCheckItems([...checkItems, id]);
    } else {
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  return (
    <>
      {todo.map((list) => (
        <TodoItems key={list.id}>
          <label>
            <input
              type="checkbox"
              onChange={(e) => handleCheckChange(e.target.checked, list.id)}
              checked={checkItems.includes(list.id) ? true : false}
            />
            <FontAwesomeIcon
              className="incompleteTodo"
              icon={checkItems.includes(list.id) ? solidHeart : regularHeart}
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
