const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listRef = document.querySelector('ul');

const ingredientsRef = ingredients.map(ingredient => {
  const listItemRef = document.createElement('li');
  listItemRef.textContent = ingredient;
  listItemRef.classList.add('item');
  return listItemRef;
});

listRef.append(...ingredientsRef);
