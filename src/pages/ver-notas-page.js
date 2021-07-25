import { useEffect, useState } from 'react';
import NoExistTasks from '../components/no-exist-tasks';

const ViewerTasksPage = () => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/tasks')
      .then((response) => response.json())
      .then((data) => setTask(data))
      .catch((e) => console.log(e));
  }, []);

  const isExistTasks = () => {
    if (task.length === 0) {
      return NoExistTasks();
    }

    return <h2>Suas notas</h2>;
  };

  return isExistTasks();
};

export default ViewerTasksPage;
