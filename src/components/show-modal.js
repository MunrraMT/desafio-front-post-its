import BtnAddNotas from './btn-add-task';
import BtnViewTasks from './btn-view-tasks';

const ShowModal = ({ feedbackPost }) => {
  if (feedbackPost === '')
    return <aside data-testid='show-modal-aside-empty' />;

  return (
    <aside data-testid='show-modal-aside' className='show-modal__content'>
      <section data-testid='show-modal-section' className='show-modal__base'>
        <h3 data-testid='show-modal-title' className='show-modal__title'>
          {feedbackPost}
        </h3>
        <BtnViewTasks />
        <BtnAddNotas />
      </section>
    </aside>
  );
};

export default ShowModal;
