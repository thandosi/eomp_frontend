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