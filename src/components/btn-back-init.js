import { useHistory } from 'react-router-dom';

const BtnBackInit = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  return (
    <button onClick={handleClick} className='home__btn' type='button'>
      Voltar
    </button>
  );
};

export default BtnBackInit;
