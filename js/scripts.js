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
  users=[]
  fetch("https://boiling-mountain-18109.herokuapp.com/get-borders/")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    users = data.data
    console.log("Users",users.length)
    // products = data;
    // showproducts(products);
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
        <button onclick="clickFunction()(${product.id})"> book now</button>
        </div>
    </div>
    `;
    
  });
}
 // adding to cart
function addToCart(prod_id) {
  console.log(products.data);
  let product = products.data.find((item) => {
    return item.prod_id == prod_id;
  });
  
  cart.push(product);
  
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart(storedCartitems);
  
  console.log(prod_id);
  
  
}

// function to show items in the cart
function renderCart(cartItems) {
  let cartContainer = document.querySelector("#cart");
  cartContainer.innerHTML = "";
  if (cartItems.length > 0) {
    cartItems.map((cartItem) => {
      cartContainer.innerHTML += `
      <div class = "products">
            <img src="${cartItem.image}" class = "product-image">
            <div class = "product-content"> 
            <h5 class = "address"> ${product.address}</h5>
            <p class = "price"> ${product.price}</p>
            <p class = "product-price">${product.rooms} </p>
            <p class = "product-price">${product.bathroom} </p>
            <p class = "product-price">${product.parking} </p>
            <button onclick="clickFunction()(${product.id})"> book now</button>
            </div>
            
        </div>
      
      
      `;
    });
    let totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    cartContainer.innerHTML += `<h3> Your total is: ${totalPrice} </h3>`;
  } else {
    cartContainer.innerHTML = "<h2> No items in cart</h2>";
  }
}

function toggleCart() {
  document.querySelector("#cart").classList.toggle("active");
}

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


function clickFunction() {
  alert("Please register first");
  window.location.href = "reg.html";
}

fetch("https://boiling-mountain-18109.herokuapp.com/get-flight/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    products = data;
  });

  // register--------------------------------------------------

  function register() {
    fetch("https://boiling-mountain-18109.herokuapp.com/client-registration/", {
      method: "POST",
      body: JSON.stringify({
        client_name: document.getElementById("client_name").value,
        client_surname: document.getElementById("client_surname").value,
        client_username: document.getElementById("client_username").value,
        client_password: document.getElementById("client_password").value,
        address: document.getElementById("address").value,
        phone_number: document.getElementById("phone_number").value,
        client_email: document.getElementById("client_email").value,
        flight_id : Users.length + 1,
      }),
      headers: {
        "Content-type": "application/json",
        'Access-Control-Allow-Origin': '*'
        
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data["status_code"] == 200) {
          alert("Registered successfully!, please log in.");
          window.location.href = "login.html";
        } else {
          alert("Please enter correct information");
          
        }
      });
  }

  // loging--------------------------------------------------------

  function login() {
    fetch("https://boiling-mountain-18109.herokuapp.com", {
      method: "POST",
      body: JSON.stringify({
        username: document.getElementById("auth_username").value,
        password: document.getElementById("auth_password").value,
      }),
      headers: {
        "Content-type": "application/json",

      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data["description"] == "Invalid credentials") {
          alert(
            "Username or password is incorrect. Please enter correct details"
          );
        } else {
          console.log(data["access_token"]);
          mystorage.setItem("jwt-token", data["access_token"]);
          myuser.setItem(
            "auth_username",
            document.getElementById("auth_username")
            );
            mypass.setItem(
              "auth_password",
              document.getElementById("auth_password")
            );
    
            window.location.href = "./products.html";
          }
        });
    }

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