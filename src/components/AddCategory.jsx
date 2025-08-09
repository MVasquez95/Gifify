import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('One Piece');
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 0) return;
    setInputValue('');
    onNewCategory(inputValue.trim());
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type='text'
        placeholder='Buscar gifs'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
