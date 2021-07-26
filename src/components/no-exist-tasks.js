import BtnAddNotas from './btn-add-notas';

const NoExistTasks = () => (
  <main className='no-tasks__content'>
    <h3 className='no-tasks__title'>Não existem notas adicionadas</h3>
    <BtnAddNotas />
  </main>
);

export default NoExistTasks;
