import { render } from '@testing-library/react';
import BtnBackInit from '../btn-back-init';

describe('Deve testar o componente BtnBackInit', () => {
  test('Deve renderizar o componente sem erros', () => {
    render(<BtnBackInit />);
  });

  test('Deve renderizar o componente sem erros, passando argumento de simplificação', () => {
    render(<BtnBackInit mod='simplified' />);
  });

  test('Deve conter o texto "Voltar"', () => {
    const { getByTestId } = render(<BtnBackInit />);

    const btnText = getByTestId('btn-back-init').textContent;

    expect(btnText).toContain('Voltar');
  });

  test('Deve conter o texto "Voltar para tela inicial", passando argumento de simplificação', () => {
    const { getByTestId } = render(<BtnBackInit mod='simplified' />);

    const btnText = getByTestId('btn-back-init').textContent;

    expect(btnText).toContain('Voltar para tela inicial');
  });
});
