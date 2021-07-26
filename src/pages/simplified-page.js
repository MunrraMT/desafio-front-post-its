import BtnBackInit from '../components/btn-back-init';
import AddNewTaskPage from './add-new-task-page';
import ViewerTasksPage from './viewer-tasks-page';

const SimplifiedPage = () => (
  <>
    <section className='simplified-page'>
      <AddNewTaskPage mod='simplified' />
      <ViewerTasksPage mod='simplified' />
    </section>
    <footer className='simplified-page__footer'>
      <BtnBackInit mod='simplified' />
    </footer>
  </>
);

export default SimplifiedPage;
