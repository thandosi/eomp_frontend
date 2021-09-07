fetch("https://boiling-mountain-18109.herokuapp.com/get-borders/")
  .then((res) => res.json())
  .then((data) => {
   console.log(data);
    //users = data.data
    //console.log("Users",users.length)
    // products = data;
    // showproducts(products);
  });

function login() {
    fetch("https://boiling-mountain-18109.herokuapp.com/get-borders/", {
      method: "POST",
      body: JSON.stringify({
        username: document.getElementById("auth_username").value,
        password: document.getElementById("auth_password").value,
      }),
      headers: {
        "Content-type": "application/json",
        'Access-Control-Allow-Origin': 'https://boiling-mountain-18109.herokuapp.com/get-borders/'
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