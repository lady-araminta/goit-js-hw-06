const categoriesRef = document.querySelectorAll('.item');

console.log('Number of categories:', categoriesRef.length);

categoriesRef.forEach(category => {
  const titleRef = category.querySelector('h2');
  console.log('Category:', titleRef.textContent);
  const amountOfElRef = category.querySelectorAll('li');
  console.log('Elements:', amountOfElRef.length);
});
