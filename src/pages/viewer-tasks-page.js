import { useEffect, useState } from 'react';
import BtnAddNotas from '../components/btn-add-notas';
import BtnBackInit from '../components/btn-back-init';
import NoExistTasks from '../components/no-exist-tasks';

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

  const ShowTasks = () => {
    const deleteTask = (id) => {
      fetch(`http://localhost:5000/removetask/${id}`, {
        method: 'DELETE'
      })
        .then((response) => response.json())
        .then((data) => setTasks(data))
        .catch((e) => {
          throw new Error(e);
        });
    };

    const tasksFormated = tasks.map((task) => (
      <article className='task__content' key={task.id}>
        <header className='task__header'>
          <h3>{task.title}</h3>
        </header>
        <p className='task__text'>{task.text}</p>
        <footer className='task__footer'>
          <button
            onClick={() => deleteTask(task.id)}
            className='task__btn-delete'
            type='button'
          >
            <i className='fas fa-times' />
          </button>
        </footer>
      </article>
    ));

    return (
      <main className='show-tasks__content'>
        <h2 className='show-tasks__h2'>Suas notas</h2>

        <section className='show-tasks__tasks'>{tasksFormated}</section>

        <BtnAddNotas />
        <BtnBackInit />
      </main>
    );
  };

  const isExistTasks = () => {
    if (tasks.length === 0) {
      return NoExistTasks();
    }

    return ShowTasks(tasks);
  };

  return isExistTasks();
};

export default ViewerTasksPage;
