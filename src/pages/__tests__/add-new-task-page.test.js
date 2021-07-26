import { render, screen } from '@testing-library/react';
import AddNewTaskPage from '../add-new-task-page';

describe('Deve testar o componente AddNewTaskPage', () => {
  test('Deve renderizar o componente sem erros', () => {
    render(<AddNewTaskPage />);
  });

  test('Deve conter uma tag form', () => {
    const { getByTestId } = render(<AddNewTaskPage />);

    const form = getByTestId('add-new-task-page-form');

    expect(form).toContainHTML('form');
  });

  test('Deve conter uma tag input type=text', () => {
    const { getByTestId } = render(<AddNewTaskPage />);

    const input = getByTestId('add-new-task-page-input-text');

    expect(input).toContainHTML('input');
  });

  test('Deve conter uma tag textarea', () => {
    const { getByTestId } = render(<AddNewTaskPage />);

    const textarea = getByTestId('add-new-task-page-textarea');

    expect(textarea).toContainHTML('textarea');
  });

  test('Deve conter uma tag button type=submit', () => {
    const { getByTestId } = render(<AddNewTaskPage />);

    const button = getByTestId('add-new-task-page-new-task');

    expect(button).toContainHTML('button');
  });

  test('Deve conter uma tag button type=button', () => {
    const { getByTestId } = render(<AddNewTaskPage />);

    const button = getByTestId('add-new-task-page-voltar');

    expect(button).toContainHTML('button');
  });

  test('Deve estar sem o button de voltar, no modo simplified', () => {
    render(<AddNewTaskPage mod='simplified' />);

    expect(
      screen.queryByTestId('add-new-task-page-voltar')
    ).not.toBeInTheDocument();
  });
});
