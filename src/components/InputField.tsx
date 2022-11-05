import React , { useState} from 'react'


interface Props{
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd :(e:React.FormEvent<EventTarget>)=>void 

}

// interface Props{
//     onData:(todo:string)=>void
// }

// React.FC means React Functional Component

function InputField({todo,setTodo,handleAdd}:Props) {

    // const [todo,setTodo] = useState<string>("")

// const handleAdd = (e:React.FormEvent) =>{
//   e.preventDefault();

// }



// const handleAdd = (e:React.SyntheticEvent) =>{
//     e.preventDefault()

//     props.onData(todo)
//     setTodo('')
// }


  return (
    <form onSubmit={handleAdd}>
        <label>Input:</label>
        <input type = 'text' name='password' value={todo} onChange={(e)=>setTodo(e.target.value)} />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default InputField