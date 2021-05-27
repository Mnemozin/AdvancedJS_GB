const products = [
  {id: 1, title: 'Notebook', price: 1000},
  {id: 2, price: 100},
  {id: 3, title: 'Keyboard', price: 250},
  {id: 4, title: 'Gamepad'},
];

const makeProduct = (id = 'bad_id', title = 'Item', price = '-1') =>
  `<div id="${id}" class="product-item">
        <h3>${title}</h3>
        <p>${price}</p>
        <button class="by-btn">Добавить</button>
    </div>`;

const renderProducts = list => {
  const productList = list.map(product => makeProduct(product.id, product.title, product.price)).join('');
  document.querySelector('.products').innerHTML = productList;
};

renderProducts(products);
