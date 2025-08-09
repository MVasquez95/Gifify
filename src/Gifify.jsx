import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GififyApp = () => {
  const [categories, setCategories] = useState([
    'One Punch',
  ]);
  const onAddCategory = (value) => {
    if (categories.includes(value)) return;
    setCategories([value, ...categories]);
  };
  console.log(categories);
  return (
    <>
      <h1>Gifify</h1>
      <AddCategory onNewCategory={onAddCategory} />
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
    </>
  );
};
