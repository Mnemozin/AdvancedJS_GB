const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// Переделать в ДЗ не использовать fetch а Promise! Дальше НЕ ИСПОЛЬЗОВАТЬ!!!
let getRequest = url => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status !== 200) {
          reject('Error');
        }
        resolve(xhr.responseText);
      }
    };
    xhr.send();
  });
};

// –--------------------------------

class ProductList {
  _goods;
  _allProducts;
  constructor(container = '.products') {
    this.container = container;
    this._goods = [];
    this._allProducts = [];

    this._getProducts().then(data => {
      this._goods = data;
      this._render();
    });
    // this.#fetchGoods();
    // this.#render();
  }

  sum() {
    return this._allProducts.reduce((sum, {price}) => sum + price, 0);
  }

  // #fetchGoods() {
  //   getRequest(`${API}/catalogData.json`, (data) => {
  //     console.log('response')
  //     // console.log(data);
  //     this.#goods = JSON.parse(data);
  //     this.#render();
  //     // console.log(this.#goods);
  //   });
  // }

  async _getProducts() {
    try {
      const response = await fetch(`${API}/catalogData.json`);
      return await response.json();
    } catch (err) {
      return console.log(err);
    }
  }

  _render() {
    console.log('render');
    const block = document.querySelector(this.container);
    console.log(this._goods);

    for (let product of this._goods) {
      const productObject = new ProductItem(product);

      this._allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }
}

class ProductItem {
  constructor(product, img = 'https://via.placeholder.com/200x150') {
    this.title = product.product_name;
    this.price = product.price;
    this.id = product.id_product;
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
