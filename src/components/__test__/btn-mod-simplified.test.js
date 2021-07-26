import { render } from '@testing-library/react';
import BtnModSimplified from '../btn-mod-simplified';

describe('Deve testar o componente BtnModSimplified', () => {
  test('Deve renderizar o componente sem erros', () => {
    render(<BtnModSimplified />);
  });

  test('Deve conter o texto "modo simplificado"', () => {
    const { getByTestId } = render(<BtnModSimplified />);

    const btnText = getByTestId('btn-mod-simplified').textContent;

    expect(btnText).toContain('modo simplificado');
  });
});
