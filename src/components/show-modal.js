import BtnAddNotas from './btn-add-notas';
import BtnVerNotas from './btn-ver-notas';

const ShowModal = ({ feedbackPost }) => {
  if (feedbackPost === '') return <aside />;

  return (
    <aside className='show-modal__content'>
      <section className='show-modal__base'>
        <h3 className='show-modal__title'>{feedbackPost}</h3>
        <BtnVerNotas />
        <BtnAddNotas />
      </section>
    </aside>
  );
};

export default ShowModal;
