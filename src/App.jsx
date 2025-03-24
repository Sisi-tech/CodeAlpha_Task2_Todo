import React, { useState, useEffect } from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import BackgroundImage from "./assets/background.jpg";


function App() {
  const [todoLists, setTodoLists] = useState([]);

  useEffect(() => {
    const savedTodoList = JSON.parse(localStorage.getItem('savedTodoList'));
    if (savedTodoList) {
      setTodoLists(savedTodoList);
    }
  }, []);

  useEffect(() => {
    if (todoLists.length > 0) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoLists));
    }
  }, [todoLists]);

  const addTodo = (newTodo) => {
    const createdTodo = {
      id: newTodo.id || Date.now(),
      title: newTodo.title,
      due: newTodo.due || "",
    };

    setTodoLists([...todoLists, createdTodo]);
  }

  const removeTodo = (id) => {
    setTodoLists((prev) => prev.filter((todo) => todo.id !== id));
  }

  return (
    <div 
      className='w-full h-dvh flex flex-col justify-center items-center' 
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='flex flex-col justify-center items-center gap-2'>
        <h2 className='text-2xl font-bold'>Todo List</h2>
        <AddTodoForm onAddTodo={addTodo} />
        <TodoList todoList={todoLists} onRemoveTodo={removeTodo} />
      </div>
    </div>
  )
};


export default App
