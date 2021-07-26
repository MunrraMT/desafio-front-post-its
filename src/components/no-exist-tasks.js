import BtnAddNotas from './btn-add-notas';

const NoExistTasks = (mod) => (
  <main className='no-tasks__content'>
    <h3 className='no-tasks__title'>Não existem notas adicionadas</h3>
    {mod === 'simplified' ? null : <BtnAddNotas />}
  </main>
);

export default NoExistTasks;
