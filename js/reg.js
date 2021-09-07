//fetching users

 Users=[]
  fetch("https://boiling-mountain-18109.herokuapp.com/get-borders/")
  .then((res) => res.json())
  .then((data) => {
    users = data.data
    console.log("Users",users.length)
   
  });


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
      "Content-type": "application/json"
    },
    mode:'cors'
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

/*function register(client_name, client_surname, client_username, client_password, address, phone_number, client_email){
  fetch("https://boiling-mountain-18109.herokuapp.com/client-registration/",{
      // mode: "no-cors",    
      method:"POST",
      body:JSON.stringify({
          client_name,
          client_surname,
          client_username,
          client_password,
          address,
          phone_number,
          client_email
      }),
      headers:{
          'content-type':'application/json; charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
      },
  })
  .then(res => res.json())
  .then(res => {
      console.log(res)
      if (res.status_code == 201){
          document.querySelector("#error-basic-details").innerHTML = "You have registered please login successfully"
          nextWindow = true
      }
      else{
          document.querySelector("#error-basic-details").innerHTML = `${res.message}`
          nextWindow = false       
      }

  })
}*/