let user = window.localStorage;
function login() {
    fetch("https://boiling-mountain-18109.herokuapp.com/auth", {
      method: "POST",
      body: JSON.stringify({
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data["description"] == "Invalid credentials") {
          alert("invalid cedentials")
          window.location.href = ".log.html";
          
          
        } else {
          
          window.location.href ="./logged.html";
        }
      });
  }

  function collect(){
    var inputUsername= document.getElementById("auth_username");
     localStorage.setItem("username", inputUsername.value);
    var inputPassword= document.getElementById("auth_password");
     localStorage.setItem("password", inputPassword.value);
     
  }

  function logOut(){
    localStorage.clear()
    window.location.href = "./index.html";
  }