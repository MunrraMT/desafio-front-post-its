import BtnAddNotas from './btn-add-notas';

const NoExistTasks = () => (
  <main className='viewer-tasks__content'>
    <h3 className='viewer-tasks__title'>Não existem notas adicionadas</h3>
    <BtnAddNotas />
  </main>
);

export default NoExistTasks;
