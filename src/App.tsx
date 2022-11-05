import React, {useState} from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './components/modal';
import TodoList from './components/TodoList';


function App() {

  
  const [todo,setTodo] = useState<string>("")
  const [todos,setTodos] = useState<Todo[]>([])

  // //in case of union
  // // const [todo,setTodo] = useState<string | number>("")
  // // const [todo,setTodo] = useState<string[]>([])


  const handleAdd = (e:React.FormEvent<EventTarget>) =>{
    e.preventDefault();
    // console.log(todo);
    
    if(todo){
      setTodos([...todos,{id:Date.now(),todo,isDone:false}])
      setTodo('')
    }
    
  }



  return (
    <div className="App">
        <InputField todo={todo} setTodo = {setTodo} handleAdd = {handleAdd} />
        <TodoList todos= {todos} setTodos = {setTodos} />
    </div>
  );
}

export default App;
