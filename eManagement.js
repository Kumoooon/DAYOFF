function getData() {
  fetch("http://localhost:3000/employee/")
    .then((response) => response.json())
    .then((data) => {
      const name = document.createElement("div");
      const position = document.createElement("div");
      const annual = document.createElement("div");
      name.textContent = data.name;
      position.textContent = data.position;
      annual.textContent = data.annual;
    })
    .catch((error) => console.log("fetch 에러!"));
}
getData();

function addEmployeeOnOff() {
  const x = document.getElementById("addEmployeeContainer");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
