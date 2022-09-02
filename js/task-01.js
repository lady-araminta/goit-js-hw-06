const categoriesRef = document.querySelectorAll('.item');

console.log('Number of categories:', categoriesRef.length);

for (let i = 0; i < categoriesRef.length; i += 1) {
  const titleRef = categoriesRef[i].querySelector('h2');
  console.log('Category:', titleRef.textContent);
  const amountOfElRef = categoriesRef[i].querySelectorAll('li');
  console.log('Elements:', amountOfElRef.length);
}
