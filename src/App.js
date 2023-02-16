import './App.css';
import { useEffect, useState, useMemo } from 'react';
import Todo from './components/Todo/Todo';
import TodoForm from './components/TodoForm/TodoForm';
import TodoResult from './components/ToDoResult/TodoResult';

import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);  

  const addTask = (enterInput) => {
    if (enterInput) {
      const newTodo = {
        id: uuidv4(),
        task: enterInput,
        complete: false
      }
      setTodos([newTodo, ...todos]);
      setFilteredTodos([newTodo, ...todos]);
    }
  }

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('todo'))){
      const res = JSON.parse(localStorage.getItem('todo'))
      setTodos(res)
     }
  }, [])

  useEffect(() => { 
    console.log(todos)
      todos.length && localStorage.setItem('todo',JSON.stringify(todos));
    setFilteredTodos(todos)
  }, [todos]);

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  }

  const handleToggle = (id) => {
    setTodos([...todos.map((todo) =>
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    )]);
  };

  const handleText =(id, task) => {
    setTodos([...todos.map((todo) =>  todo.id === id ? {...todo,task} : todo)])
  }

  const activeBtn = () => {
    setFilteredTodos(todos.filter((todo) => !todo.complete));
  }

  const completedBtn = () => {
    setFilteredTodos(todos.filter((todo) => todo.complete));
  }

  const allBtn = () => {
    setFilteredTodos(todos);
  }

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.complete));
    console.log('deleted arr', filteredTodos);
  }

  return (
    <div className='wrapper'>
      <div className='container'>
        <header>
          <h1>todos</h1>
        </header>
        <TodoForm addTask={addTask} />
        <div className='todos'>
          {filteredTodos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                handleToggle={handleToggle}
                removeTask={removeTask}
                todoArr={filteredTodos}
                handleTodo={handleText}
              />
            )
          })}
        </div>
        <div className='todo_result'>
          <TodoResult 
              length={filteredTodos.length}  
              all={allBtn}
              active={activeBtn}
              completed={completedBtn}
              clearCompleted={clearCompleted}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
