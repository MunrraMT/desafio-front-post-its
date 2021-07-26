import { useHistory } from 'react-router-dom';

const BtnVerNotas = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/view-tasks');
  };

  return (
    <button onClick={handleClick} className='home__btn' type='button'>
      ver notas
    </button>
  );
};

export default BtnVerNotas;
