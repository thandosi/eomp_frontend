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

  //getting users------------------------------------------------------------


  users=[]
  fetch("https://boiling-mountain-18109.herokuapp.com/get-borders/")
  .then((res) => res.json())
  .then((data) => {
    users = data.data
    console.log("Users",users.length)
    
  });

// Show-Products Button------------------------------------------------

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
            <h5 class = "address"> ${product.address}</h5>
            <p class = "price"> ${product.price}</p>
             <p class = "product-price">${product.rooms} </p>
             <p class = "product-price">${product.bathroom} </p>
             <p class = "product-price">${product.parking} </p>
        <button onclick="addToCart(${product.id})"> Add to cart</button>
        </div>
    </div>
    `;

    
  });
}

//* Search Button *//

function searchItems() {
  let searchTerm = document.querySelector(".searchIterms").value;
  console.log(searchTerm);
}


function addToCart(id) {
  let product = products.data.find((item) => {
    return (item.id = id);
});
  console.log(product);
  cart.push(product);
  console.log("See Cart Items Here: ", cart);
}




// // function to show items in the cart
// function renderCart(cartProducts) {
//   let cartContainer = document.querySelector("#cart");
//   cartContainer.innerHTML = "";
//   if (cartItems.length > 0) {
//     cartProducts.map((cartItem) => {
//       cartContainer.innerHTML += `
//       <div class = "product">
//             <img src="${cartItem.image}" class = "product-image">
//             <div class = "product-content"> 
//             <h5 class = "address"> ${products.address}</h5>
//             <p class = "price"> ${products.price}</p>
//             <p class = "product-price">${products.rooms} </p>
//             <p class = "product-price">${products.bathroom} </p>
//             <p class = "product-price">${products.parking} </p>
//             <button onclick="addToCart(${products.id})"> book now</button>
//             </div>
            
//         </div>
      
      
//       `;
//     });
//     let totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
//     cartContainer.innerHTML += `<h3> Your total is: ${totalPrice} </h3>`;
//   } else {
//     cartContainer.innerHTML = "<h2> No items in cart</h2>";
//   }
// }

// function toggleCart() {
//   document.querySelector("#cart").classList.toggle("active");
// }

//searching

function searchPost(){
  let searchTerm = document.querySelector("#search-post").value 
  let showError = document.querySelector("#post-search-error")
  console.log(searchTerm)

  // filter over posts
  let postSearched = arrPosts.filter( (post) => 
  post.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  showError.innerHTML = "";
  if (postSearched.length == 0){
      showError.innerHTML = "Post does not exists"
  }
  else if (searchTerm === "") {
      showError.innerHTML = "Input is empty"
  } 
  else{
      displayPosts(postSearched)
  }
}

// getting flights ----------------------------------------------------------

fetch("https://boiling-mountain-18109.herokuapp.com/get-flight/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    products = data;
  });

    //search

    function selected() {
      let searchTerm = document.querySelector(".selected").value;
      console.log(searchTerm);
      console.log(products);
      let searchedProducts = products.filter((product) => 
        product.product_type.toLowerCase().includes(searchTerm.toLowerCase())
      
      );
      console.log(searchedProducts);
      make_products(searchedProducts);
    
    }