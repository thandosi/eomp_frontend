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
        <button onclick="clickFunction()(${product.id})"> book now</button>
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
  });

  // register--------------------------------------------------

  function register() {
    fetch("https://boiling-mountain-18109.herokuapp.com/client-registration/", {
      method: "POST",
      body: JSON.stringify({
        client_name: document.getElementById("client_name").value,
        client_surname: document.getElementById("client_surname").value,
        client_id : document.getElementById("identity").value,
        client_username: document.getElementById("client_username").value,
        client_password: document.getElementById("client_password").value,
        address: document.getElementById("address").value,
        phone_number: document.getElementById("phone_number").value,
        client_email: document.getElementById("client_email").value,
      }),
      headers: {
        "Content-type": "application/json"
        
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
    fetch("https://still-brushlands-23193.herokuapp.com/users/", {
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