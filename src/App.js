import { ToastContainer } from 'react-toastify';
import './App.css';
import Task from './component/Task';
import TaskList from './component/TaskList';


export const URL = process.env.REACT_APP_SERVER_URL
function App() {
  return (
    <div className="app">
      
      <div className='task-container'>
      <TaskList/>
      <ToastContainer/>
      </div>
    </div>
  );
}

export default App;
