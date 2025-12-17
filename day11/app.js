document.addEventListener("DOMContentLoaded", () => {
  const cartBtn = document.querySelector(".cart_icon");
  const body = document.querySelector("body");
  const closeBtn = document.querySelector(".close");
  let listproducthtml = document.querySelector(".product-list");
  let listcarthtml = document.querySelector(".listcart");
  let totalpricehtml = document.querySelector(".cart_icon span");

  let products = [];
  let cart = [];

  closeBtn.addEventListener("click", () => {
    body.classList.remove("showcart");
  });
  cartBtn.addEventListener("click", () => {
    body.classList.toggle("showcart");
  });

  const addDataToHTML = () => {
    listproducthtml.innerHTML = "";
    if (products.length > 0) {
      products.forEach((product) => {
        let newproduct = document.createElement("div");
        newproduct.classList.add("item");
        newproduct.dataset.id = product.id;
        newproduct.innerHTML = ` <img src="${product.image}" alt="" />
          <h2>${product.name}</h2>
          <div class="price">$${product.price}</div>
          <button class="addtocart">ADD TO CART</button>`;
        listproducthtml.appendChild(newproduct);
      });
    }
  };
  listproducthtml.addEventListener("click", (eve) => {
    let position = eve.target;
    if (position.classList.contains("addtocart")) {
      let product_id = position.parentElement.dataset.id;

      addtocart(product_id);
    }
  });

  const addtocart = (product_id) => {
    let positionofprodctincart = cart.findIndex(
      (item) => item.id == product_id
    );
    if (cart.length <= 0) {
      cart = [
        {
          id: product_id,
          quantity: 1,
        },
      ];
    } else if (positionofprodctincart < 0) {
      cart.push({
        id: product_id,
        quantity: 1,
      });
    } else {
      cart[positionofprodctincart].quantity = cart[positionofprodctincart].quantity + 1;
    }
    addcarttohtml();
  };

  const addcarttohtml = () => {
    listcarthtml.innerHTML = "";
    if (cart.length > 0) {
      cart.forEach( item => {
        newcart = document.createElement("div");
        newcart.classList.add("item");
        listcarthtml.appendChild(newcart);
        let positionproduct = products.findIndex((value) => value.id == item.id);
        let info = products[positionproduct];
        newcart.innerHTML = `<div class="item">
          <div class="image">
            <img src=${info.image} alt=""/>
          </div>
          <div class="name">${info.name}</div>

          <div class="totel-price">$${info.price * item.quantity}</div>
          <div class="quantity">
            <span class="minus"><</span>
            <span>${item.quantity}</span>
            <span class="plus">></span>
          </div>
        </div>`
      });
    }
  };

  const intit = () => {
    fetch("item.json")
      .then((Response) => Response.json())
      .then((data) => {
        products = data;
        addDataToHTML();
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };
  intit();
});
