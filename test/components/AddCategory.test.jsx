import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en AddCategory', () => {
  it('debe de cambiar el valor de la caja de texto', () => {
    const { getByRole } = render(<AddCategory onNewCategory={() => {}} />);
    const input = getByRole('textbox');
    fireEvent.input(input, { target: { value: 'Saitama' } });
    expect(input.value).toBe('Saitama');
  });
  it('debe de llamar onNewCategory si el input tiene un valor', () => {
    const inputValue = 'Saitama';
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(input);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });
  it('no debe de llamar el onNewCategory si el input está vacío', () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole('textbox');
    fireEvent.submit(input);
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});