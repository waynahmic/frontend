import React from 'react'
import './Task.css'

const Form = ({createTask,name,handleInputChange}) => {                      //we assigned props we've not used
  // const [task, setTask] = useState('')
  // const createTask =(e) => {
  //   e.preventDefault()
  //   console.log(task)                            
  // }

  return (
    <form className='task-form' onSubmit={createTask}>
        <input
        type='text'
        placeholder="Add a Task"
        name="name"
        value={name}
        onChange={handleInputChange}    
        />
        <button className='--btn --btn-primary' type='submit'>Submit</button>

    </form>
  )
  }

export default Form