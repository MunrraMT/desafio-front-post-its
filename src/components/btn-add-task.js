import { useHistory } from 'react-router-dom';

const BtnAddTask = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/add-task');
    history.go(0);
  };

  return (
    <button
      data-testid='btn-new-task'
      onClick={handleClick}
      className='home__btn'
      type='button'
    >
      nova nota
    </button>
  );
};

export default BtnAddTask;
