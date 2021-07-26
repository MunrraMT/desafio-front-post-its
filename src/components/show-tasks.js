const ShowTasks = (tasks) => {
  const tasksFormated = tasks.map((task) => (
    <article key={task.id}>
      <header>
        <h3>{task.title}</h3>
      </header>
      <p>{task.text}</p>
      <footer>
        <button type='button'>x</button>
      </footer>
    </article>
  ));

  return (
    <main>
      <h2>Suas notas</h2>
      <section>{tasksFormated}</section>
    </main>
  );
};

export default ShowTasks;
