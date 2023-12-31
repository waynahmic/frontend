import React, { useEffect, useState } from 'react'
import Form from './Form'
import Task from './Task'
import axios from 'axios'
import { URL } from '../App'
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const TaskList = () => {
  const [formData, setFormData] = useState({name: ''}) //1
  const [isEditing, setIsEditing] = useState(false);
  const [taskID, setTaskID] = useState('');
  const {name} = formData;  //2"
  const URL = "https://crud-backend-707b.onrender.com"

  const [task, setTask] = useState([])
  const handleInputChange = (e) =>{
    const {name, value} = e.target
    setFormData({...formData, [name]: value})  // whatever we write in the value, set it to the name... //3
  }

// to create task
const createTask = async(e) =>{
  e.preventDefault()
  try{
    await axios.post(`${URL}/api/tasks/`, formData)
    console.log(formData)
    toast.success("form created") 
    getAllTask()
    setFormData({name: ''})
} catch (error){
  console.error("Error creating task:", error);
toast.error("An error occurred while creating the task.");
}
}
// to get all task
const getAllTask = async () =>{
  try {
    const {data}= await axios.get(`${URL}/api/tasks/`)
    setTask(data)
  } catch (error) {
    console.log(error)
  }
 
}


// to delete task
const deleteTask = async (id) => {
  try {
    await axios.delete(`${URL}/api/tasks/${id}`);
    const updatedTasks = task.filter((task) => task._id !== id);
    setTask(updatedTasks);
    toast.success('Task deleted');
  } catch (error) {
    console.log(error);
    toast.error('Not deleted');
  }
}


// to update task
const getSingleTask = async(task) =>{
  setFormData({name:task.name});
  setTaskID(task._id);
  setIsEditing(true)
};

const updateTask = async (e) =>{
  e.preventDefault()
  if(name === ''){
    toast.error('Please provide a valid task name.')
  }
  try {
     await axios.patch(`${URL}/api/tasks/${taskID}`, formData)
     setFormData({...formData, name:""})
     setIsEditing(false)
  } catch (error) {
    console.log(error)
    toast.error('Error: Not updated')
  }
}
useEffect(() => {
    getAllTask()
}, [])
//hfdgc

return (
  <div>
     <h1 className='--center-all --text-purple'>MANAGER</h1> 
     <div className="--flex-between --pb">
        <h3>
          <b>Total Tasks:</b> {task.length}
        </h3>
        <h3>
          <b>Completed Tasks:</b> 0
        </h3>
      </div>
      {Array.isArray(task) ? ( task.map((data, index) => (
  <Task
    task={data}
    key={data._id}
    index={index}
    updateTask={updateTask}
    deleteTask={deleteTask}
    getSingleTask={getSingleTask}
  />
))
) :(
  <p> No task available </p>
)
}
 

    
    
     <Form handleInputChange={handleInputChange} createTask={createTask} name={name}/> 
     
  </div>
)

}
export default TaskList;