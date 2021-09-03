var selectedRow = null

fetch("https://boiling-mountain-18109.herokuapp.com/get-flight/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    products = data;
    showproducts(products);
  });

//* Show-Profucts Button*//
function showproducts(products) {
  let product_container = document.querySelector("#products");
  let tble1 = document.querySelector(".tble1");
  product_container.innerHTML = "";
  products.data.forEach((product) => {
    product_container.innerHTML += `
    <div class = "air" ">
        <div class= "air">
        <td class = "tble1"> ${product.airline}</td>
        <td class = "tble2-price">${product.price} </td>
        <td class = "product-price">${product.from_where} </td>
        <td class = "product-price">${product.to_where} </td>
        <td class = "product-price">${product.duration} </td>
        <td class = "product-price">${product.departure} </td>
        <td class = "product-price">${product.arrival} </td>
        </div>
    </div>
    `;
    
  });
}

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["airline"] = document.getElementById("airline").value;
    formData["price"] = document.getElementById("price").value;
    formData["from_where"] = document.getElementById("from_where").value;
    formData["to_where"] = document.getElementById("to_where").value;
    formData["duration"] = document.getElementById("duration").value;
    formData["departure"] = document.getElementById("departure").value;
    formData["arrival"] = document.getElementById("arrival").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.airline;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.price;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.from_where;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.to_where;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.duration;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.departure;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.arrival;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

// creating flight

function addtocatalogue() {
    fetch("https://boiling-mountain-18109.herokuapp.com/get-flight/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `jwt ${mystorage.getItem("jwt-token")}`,
      },
      body: JSON.stringify({
        ai: document.getElementById("airline").value,
        price: document.getElementById("price").value,
        from_where: document.getElementById("from_where").value,
        to_where: document.getElementById("to_where").value,
      }),
    })
      .then((response) => response.json)
      .then((data) => {
        console.log(data);
        console.log("success");
        if (data["description"] == "Product added succesfully") {
          alert("product added successfuly");
          window.location.href = "./products.html";
        } else {
          alert("did not add!, please make sure the information is correct.");
          window.location.href = "./products.html";
        }
      });
  }

function resetForm() {
    document.getElementById("airline").value = "";
    document.getElementById("price").value = "";
    document.getElementById("from_where").value = "";
    document.getElementById("to_where").value = "";
    document.getElementById("duration").value = "";
    document.getElementById("departure").value = "";
    document.getElementById("arrival").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("airline").value = selectedRow.cells[0].innerHTML;
    document.getElementById("price").value = selectedRow.cells[1].innerHTML;
    document.getElementById("from_where").value = selectedRow.cells[2].innerHTML;
    document.getElementById("to_where").value = selectedRow.cells[3].innerHTML;
    document.getElementById("duration").value = selectedRow.cells[4].innerHTML;
    document.getElementById("departure").value = selectedRow.cells[5].innerHTML;
    document.getElementById("arrival").value = selectedRow.cells[6].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.airline;
    selectedRow.cells[1].innerHTML = formData.price;
    selectedRow.cells[2].innerHTML = formData.from_where;
    selectedRow.cells[3].innerHTML = formData.to_where;
    selectedRow.cells[4].innerHTML = formData.duration;
    selectedRow.cells[5].innerHTML = formData.departure;
    selectedRow.cells[6].innerHTML = formData.arrival;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("airline").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}