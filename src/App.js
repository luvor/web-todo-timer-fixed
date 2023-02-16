import './App.css';
import Header from './components/TodoHeader/Header';

import TodoList from './components/TodoList/TodoList';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import TodoForm from './components/TodoForm/TodoForm';

function App() {
  const [todo,setTodo] = useState([{
    id:1,
    status: true,
    name: "First list",
    type: "work"
  },
  {
    id:2,
    status: true,
    name: "Second list",
    type: "work"
  },
  {
    id:3,
    status: true,
    name: "Third list",
    type: "work"
  },])


  return (
    <div className='container'>
        <Header/>
        <section className='main'>
          <div className='left_side'>
            <TodoForm todo = {todo} setTodo = {setTodo}/>
          </div>
          <div className='right_side'>
            <TodoList todo = {todo} setTodo = {setTodo} />
          </div>
        </section>
    </div>
      
    
  );
}

export default App;
