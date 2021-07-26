/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useHistory } from 'react-router-dom';
import BtnAddNotas from './btn-add-notas';
import BtnVerNotas from './btn-ver-notas';

const ShowModal = ({ feedbackPost }) => {
  if (feedbackPost === '') return <aside />;

  const history = useHistory();
  const closeModal = () => {
    history.push('/add-task');
    history.go(0);
  };

  return (
    <aside onClick={closeModal} className='show-modal__content'>
      <section className='show-modal__base'>
        <h3 className='show-modal__title'>{feedbackPost}</h3>
        <BtnVerNotas />
        <BtnAddNotas />
      </section>
    </aside>
  );
};

export default ShowModal;
