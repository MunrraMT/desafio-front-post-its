import { useHistory } from 'react-router-dom';

const BtnViewTasks = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/view-tasks');
  };

  return (
    <button
      data-testid='btn-view-tasks'
      onClick={handleClick}
      className='home__btn'
      type='button'
    >
      ver notas
    </button>
  );
};

export default BtnViewTasks;
