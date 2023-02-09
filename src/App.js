import logo from './logo.svg';
import './App.css';
import Header from './components/TodoHeader/Header';
import Main from './components/TodoMain/Main';
import TodoList from './components/TodoList/TodoList';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

function App() {
  const [todo,setTodo] = useState([{
    id:1,
    status: true,
    name: "First list"
  },
  {
    id:2,
    status: true,
    name: "Second list"
  },
  {
    id:3,
    status: true,
    name: "Third list"
  },])


  return (
    <Container>
    <Header/>
    <Main todo = {todo} setTodo = {setTodo}/>
    <TodoList todo = {todo} setTodo = {setTodo} />
    </Container>
  );
}

export default App;
