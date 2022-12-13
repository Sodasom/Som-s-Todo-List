import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Splash from './components/Splash';
import Nav from './components/Nav';
import Calendar from './page/Calendar';
import TodoList from './page/TodoList';
import TodoInsert from './page/TodoInsert';
import { TodoItemData } from './page/TodoItemData';

const App = () => {
  const [menu, setMenu] = useState(false);
  const [todo, setTodo] = useState(TodoItemData);
  const [inputValue, setInputValue] = useState({
    todo: '',
    memo: '',
  });

  return (
    <>
      <Router>
        <Splash />
        <Header
          menu={menu}
          setMenu={setMenu}
          inputValue={inputValue}
          todo={todo}
          setTodo={setTodo}
        />
        <Nav menu={menu} setMenu={setMenu} />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
          <Route
            path="/list"
            element={<TodoList todo={todo} setTodo={setTodo} />}
          ></Route>
          <Route
            path="/insert"
            element={
              <TodoInsert
                inputValue={inputValue}
                setInputValue={setInputValue}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
