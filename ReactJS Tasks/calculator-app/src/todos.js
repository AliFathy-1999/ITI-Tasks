import React, { useState } from 'react';

export function Todos() {
  const [todos,setTodos] = useState([]);
  const [todosInput,setTodosInput] = useState("");
  return (
    <div>
      <h1 className='text-center text-primary'>Todo List</h1>
      <div className='contanier'>
        <div className='d-flex justify-content-center'>
          <input type='text' className='form-control form-control-lg w-25'
           placeholder='Enter todo item' value={todosInput} onChange={(e)=>{ setTodosInput(e.target.value)}}/>
          <button type="button" class="btn btn-primary ms-3"
          onClick={()=>{ setTodos([...todos, todosInput]) ;setTodosInput("")} }>Add todo</button>
          
        </div>
        <div className='d-flex justify-content-center'>
          <div>
            { todos.map((todo)=> <h1> {todo} </h1> )}
          </div>
        </div>

        
      </div>
    </div>
  );
}
