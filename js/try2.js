
function addProfile() {
    fetch('https://boiling-mountain-18109.herokuapp.com/create-flights/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            full_name: document.getElementById('Airline').value,
            nickname: document.getElementById('price').value,
            age: document.getElementById('from_where').value,
            date_of_birth: document.getElementById('to_where').value,
            place_of_birth:document.getElementById('duration').value,
            citizenship:document.getElementById('departure').value,
            position:document.getElementById('arrival').value,

  
        }),
        mode: 'cors'
    }).then(res => res.json()).then(data => {
        console.log(data)
        console.log("Profile created successfully")
  
      if (data['message'] == "Player Profile Added Successfully") {
            alert('You have sucessfully Added A Profile! Please View It On The add player profile Page')
            window.location.href = './add player profile.html'
        } /*else {
            alert('Form filled in incorrectly')
        }*/
    })
  }
  
  function addImage() {
    const preview = document.querySelector('.image');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();
  
    reader.addEventListener("load", function () {
        preview.src = reader.result;
    }, false);
  
    if (file) {
        reader.readAsDataURL(file);
    }
  }