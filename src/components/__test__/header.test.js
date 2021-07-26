import { render } from '@testing-library/react';
import Header from '../header';

describe('Deve testar o componente Header', () => {
  test('Deve renderizar o componente sem erros', () => {
    render(<Header />);
  });

  test('Deve conter o uma tag Header', () => {
    const { getByTestId } = render(<Header />);

    const header = getByTestId('header-tag');

    expect(header).toContainHTML('header');
  });

  test('Deve conter o texto "Gereciador de Notas"', () => {
    const { getByTestId } = render(<Header />);

    const header = getByTestId('header-title').textContent;

    expect(header).toContain('Gereciador de Notas');
  });
});
