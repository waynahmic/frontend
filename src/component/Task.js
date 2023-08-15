import React, { useState } from 'react'
import './Task.css';
import {MdOutlineDeleteForever,MdEditNote} from 'react-icons/md';
import { toast } from 'react-toastify';



const Task = ({task , index, deleteTask, updateTask, getSingleTask}) => {
  const [editing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(task.name);

  // const handleEditClick = ()=>{
  //   setEditing(true);
  // };
  // const handleSaveClick = async () => {
  //   // to check if the editedName is empty or contains only whitespace characters
  //   if (editedName.trim() === '') {
  //     toast.error('Please provide a valid task name.');
  //     return;
  //   }
  //   // If the edited name is not empty, proceed with updating the task
  //   await updateTask(task._id, { name: editedName });      // Update the task name
  //   setEditing(false);      // Set the editing state to false to exit editing mode
  // };

  // // useEffect(() => {
  // //   getAllTask();
  // // }, []);
  return (
    <div className='task'>
      <p>
        {index + 1}{' '}
        {editing ? (
          <div>
            <input
              type='text'
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
            {/* <button onClick={handleSaveClick}>Save</button> Added Save button */}
          </div>
        ) : (
          <b>{task.name}</b>
        )}
      </p>
      <div className='task-icons'>
        <MdEditNote onClick={() => getSingleTask(task._id)} /> {/* Handle edit click */}
        <MdOutlineDeleteForever onClick={() => deleteTask(task._id)} />
      </div>
    </div>
  );
};

export default Task;