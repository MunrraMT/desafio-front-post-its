import { useHistory } from 'react-router-dom';

const BtnAddNotas = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/add-notas');
  };

  return (
    <button onClick={handleClick} className='home__btn' type='button'>
      nova nota
    </button>
  );
};

export default BtnAddNotas;
