class ProductList {
  _goods;
  _allProducts;
  constructor(container = '.products') {
    this.container = container;
    this._goods = [];
    this._allProducts = [];
    this._fetchGoods();
    this._render();
  }

  calculateTotal() {
    let total = 0;
    for (let item of this._allProducts) {
      total += item.price;
    }
    return total;
  }

  _fetchGoods() {
    this._goods = [
      {id: 1, title: 'Notebook', price: 20000},
      {id: 2, title: 'Mouse', price: 1500},
      {id: 3, title: 'Keyboard', price: 5000},
      {id: 4, title: 'Gamepad', price: 4500},
    ];
  }

  _render() {
    const block = document.querySelector(this.container);

    for (let product of this._goods) {
      const productObject = new ProductItem(product);

      this._allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }
}

class ProductItem {
  constructor(product, img = 'https://via.placeholder.com/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
  }
}
class Cart{
  constructor(){ }
}

class CartItem {
  constructor() {}
}

const catalog = new ProductList();

// class ProductList {
//   constructor(container = '.products') {
//     this.container = container;
//     this._goods = [];
//     this._allProducts = [];
//
//     this._fetchGoods();
//     this._render();
//   }
//
//   _fetchGoods() {
//     this._goods = [
//       {id: 1, title: 'Notebook', price: 20000},
//       {id: 2, title: 'Mouse', price: 1500},
//       {id: 3, title: 'Keyboard', price: 5000},
//       {id: 4, title: 'Gamepad', price: 4500},
//     ];
//   }
//
//   _render() {
//     const block = document.querySelector(this.container);
//
//     for (let product of this._goods) {
//       const productObject = new ProductItem(product);
//
//       this._allProducts.push(productObject);
//       block.insertAdjacentHTML('beforeend', productObject.render());
//     }
//   }
// }
//
// class ProductItem {
//   constructor(product, img='https://via.placeholder.com/200x150') {
//     this.title = product.title;
//     this.price = product.price;
//     this.id = product.id;
//     this.img = img;
//   }
//
//   render() {
//     return `<div class="product-item" data-id="${this.id}">
//               <img src="${this.img}" alt="Some img">
//               <div class="desc">
//                   <h3>${this.title}</h3>
//                   <p>${this.price} \u20bd</p>
//                   <button class="buy-btn">Купить</button>
//               </div>
//           </div>`;
//   }
// }
//
// const catalog = new ProductList();
// catalog.fetchGoods();
// catalog.render();

// const products = [
//   {id: 1, title: 'Notebook', price: 20000},
//   {id: 2, title: 'Mouse', price: 1500},
//   {id: 3, title: 'Keyboard', price: 5000},
//   {id: 4, title: 'Gamepad', price: 4500},
// ];
//
// const renderProduct = (item, img='https://via.placeholder.com/200x150') => `<div class="product-item" data-id="${this.id}">
//               <img src="${img}" alt="Some img">
//               <div class="desc">
//                   <h3>${item.title}</h3>
//                   <p>${item.price} \u20bd</p>
//                   <button class="buy-btn">Купить</button>
//               </div>
//           </div>`;
//
// const renderProducts = list => {
// document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
// };
//
// renderProducts(products);
