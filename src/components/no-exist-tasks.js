import BtnAddTask from './btn-add-task';

const NoExistTasks = (mod) => (
  <main data-testid='no-exist-tasks-main' className='no-tasks__content'>
    <h3 data-testid='no-exist-tasks-title' className='no-tasks__title'>
      Não existem notas adicionadas
    </h3>
    {mod === 'simplified' ? null : <BtnAddTask />}
  </main>
);

export default NoExistTasks;
