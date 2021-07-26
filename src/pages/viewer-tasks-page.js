import { useEffect, useState } from 'react';
import NoExistTasks from '../components/no-exist-tasks';
import ShowTasks from '../components/show-tasks';

const ViewerTasksPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/tasks')
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((e) => {
        throw new Error(e);
      });
  }, []);

  const isExistTasks = () => {
    if (tasks.length === 0) {
      return NoExistTasks();
    }

    return ShowTasks(tasks);
  };

  return isExistTasks();
};

export default ViewerTasksPage;
