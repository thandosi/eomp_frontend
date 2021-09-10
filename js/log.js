let user = window.localStorage;

Users=[]
fetch("https://boiling-mountain-18109.herokuapp.com/get-passengers/")
.then((res) => res.json())
.then((data) => {
  users = data.data
  console.log(data)
  console.log("Users",users.length)
 
});


function login() {
    fetch('https://boiling-mountain-18109.herokuapp.com/get-passengers/', {
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
          
        } else {
          alert('You have successfully logged in')
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