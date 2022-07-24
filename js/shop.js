// Script de l'Sprint 3 de l'itinerar Angular - Alumne: Toni Machado
"use strict";
// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "Cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 4.76,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 33.33,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];

// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
  addToCart(id);
  /*
  for (let i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      cartList.push(products[i]);
      i = products.length;
    }
  }*/
}

// Exercise 2
function cleanCart() {
  cart = [];
  cartList = [];
  console.log("Cart:", cartList);
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].subtotalWithDiscount;
    console.log("Total=", total.toFixed(2));
  }
  return total;
}

// Exercise 4
function generateCart() {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
  /*cart = [];
  for (let i = 0; i < cartList.length; i++) {
    if (!cart.includes(cartList[i])) {
      cartList[i].quantity = 1;
      cart.push(cartList[i]);
    } else {
      cartList[i].quantity += 1;
    }
  }
  console.log("Cart: ", cart);*/
}

// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  for (let i = 0; i < cart.length; i++) {
    cart[i].subtotal = cart[i].price * cart[i].quantity; // Subtotal
    console.log("Producto: ", cart[i].name);
    console.log("Subtotal: ", cart[i].subtotal.toFixed(2));
    console.log("Offer: ", cart[i].offer);
    // Promotion discount
    if (cart[i].offer !== undefined) {
      // Si offer no es undefined es que tiene alguna promoción
      if (cart[i].quantity >= cart[i].offer.number) {
        // Condición para aplicar la oferta
        console.log("Este producto tiene descuento!!");
        cart[i].subtotalWithDiscount = cart[i].subtotal - cart[i].subtotal * (cart[i].offer.percent / 100);
        console.log("Subtotal discount ", cart[i].subtotalWithDiscount.toFixed(2));
      } else {
        cart[i].subtotalWithDiscount = cart[i].subtotal;
        console.log("No hay suficientes unidades para aplicar el descuento");
      }
    } else {
      cart[i].subtotalWithDiscount = cart[i].subtotal;
      console.log("Este producto NO tiene descuento");
    }
  }
}

// Exercise 6
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
  let cartModal = document.querySelector("#cart_list");
  cartModal.innerHTML = "";
  for (let i = 0; i < cart.length; i++) { // Recorremos el array cart i mostramos los productos en el carrito
    document.getElementById("cart_list").innerHTML += `<tr><th>${cart[i].name}</th>
    <td>${cart[i].price}</td>
    <td>${cart[i].quantity}</td>
    <td>${cart[i].subtotalWithDiscount.toFixed(2)}</td>
    </tr>
    `;
  }
  // Total Carrito
  let cartTotal = calculateTotal();
  console.log("cartTotal: ", cartTotal);
  document.getElementById("total_price").innerHTML = cartTotal.toFixed(2);
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // Definimos variable product i enlazamos contador
  let product;
  let contador = document.getElementById('count_product');
  // 1. Loop for to the array products to get the item to add to cart
  for (let i=0; i<id; i++) {
    product = products[i];
  }
  cartList.push(product);
  console.log ('Add to cart - cartList Array: ', cartList);

  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
let indexProduct = cartList.findIndex(p => p === product);
console.log('index product: ',indexProduct);
if (!cart.includes(product)) {
  cartList[indexProduct].quantity=1;3
  cart.push(cartList[indexProduct]);
  contador.innerHTML++;
} else {
  cartList[indexProduct].quantity+=1;
  contador.innerHTML++;
}
//Aplicamos promos
applyPromotionsCart();
console.log('Cart:', cart);
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  
  // 2. Add found product to the cartList array
}

function open_modal() {
  console.log("Open Modal");
  printCart();
}
