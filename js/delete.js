let products = [];
let flight = [];
let cart = [];
console.log(cart);

fetch("https://boiling-mountain-18109.herokuapp.com/get-hotels/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    products = data;
    showproducts(products);
  });

//* Show-Profucts Button*//
function showproducts(products) {
  let product_container = document.querySelector("#products");
  product_container.innerHTML = "";
  products.data.forEach((product) => {
    product_container.innerHTML += `
    <div class = "products" ">
        <img src="${product.image}" class = "product-images">
        <div class= "product-content">
        <h4 class = "product-title"> ${product.price}</h4>
        <p class = "product-price">${product.rooms} </p>
        <p class = "product-price">${product.bathroom} </p>
        <p class = "product-price">${product.parking} </p>
        <button onclick="clickFunction()(${product.id})"> Update</button>
        <button onclick ="delFunction() (${product.id}) "> Delete </button>
        </div>
    </div>
    `;
    
  });
}

function clickFunction() {
  alert("Please register first");
}

fetch("https://boiling-mountain-18109.herokuapp.com/get-flight/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    products = data;
    showflights(products)
  });

  //* Show-Profucts Button*//
function showflights(products) {
  let product_container = document.querySelector(".fly");
  product_container.innerHTML = "";
  products.data.forEach((product) => {
    product_container.innerHTML += `
    <div class = "products" ">
        <h4 class = "product-title"> ${product.airline}</h4>
        <p class = "product-price">${product.price} </p>
        <p class = "product-departure">${product.from_where} </p>
        <p class = "product-arrival">${product.to_where} </p>
        <p class = "product-duration">${product.duration}</p>
        <p class = "product-takeoff">${product.departure}</p>
        <p class = "product-landing">${product.arrival}</p>
        <button onclick="clickFunction()(${product.id})"> Update</button>
        <button onclick ="delFunction() (${product.id}) "> Delete </button>
        </div>
    </div>
    `;
    
  });
}
