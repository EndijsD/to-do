import { useEffect, useState } from 'react';
import TaskList from '../TaskList/TaskList';

const Home = ({ value }) => {
  const [tasks, setTasks] = useState([]);

  const getTasks = () => {
    return JSON.parse(localStorage.getItem('tasks'));
  };

  const deleteTask = (id) => {
    // If only one task left then remove the item from localStorage else remove the specified task
    if (tasks.length === 1) {
      localStorage.removeItem('tasks');
    } else {
      const updatedTasks = tasks.filter((item) => item.id !== id);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    setTasks(getTasks);
  };

  // Runs once on the initial app load
  useEffect(() => {
    setTasks(getTasks());
  }, []);

  return (
    <TaskList
      list={
        tasks && value
          ? tasks.filter((task) => task.name.includes(value))
          : tasks
      }
      handleDelete={deleteTask}
    />
  );
};

export default Home;
