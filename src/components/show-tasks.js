import BtnAddNotas from './btn-add-notas';

const ShowTasks = (tasks) => {
  const tasksFormated = tasks.map((task) => (
    <article className='task__content' key={task.id}>
      <header className='task__header'>
        <h3>{task.title}</h3>
      </header>
      <p className='task__text'>{task.text}</p>
      <footer className='task__footer'>
        <button className='task__btn-delete' type='button'>
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
    </main>
  );
};

export default ShowTasks;
