document.querySelector(`#categories`);
const categories = document.querySelector(`#categories`);
console.log(`Number of categories`, categories.children.length);
const items = document.querySelectorAll(`.item`);
console.log(items);
items.forEach((items) => {
  console.log(`Category : `, items.querySelector(`h2`).textContent);
  console.log(`Elements:`, items.querySelectorAll(`li`).length);
});
