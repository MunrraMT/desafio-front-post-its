import { useHistory } from 'react-router-dom';

const BtnModSimplified = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/simplified');
  };

  return (
    <button
      data-testid='btn-mod-simplified'
      onClick={handleClick}
      className='home__btn'
      type='button'
    >
      modo simplificado
    </button>
  );
};

export default BtnModSimplified;
