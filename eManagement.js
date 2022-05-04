const ul = document.getElementById("employee");
const list = document.createDocumentFragment();
const url = "http://localhost:3000/employee";
const url2 = "http://localhost:3000/eManagement";

function getData() {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let list = data;
      console.log(list);
      const getEmployee = list
        .map((employee) => {
          return `<div class = "userList" ><div class = "person"  onclick="editEmployeeOnOff()"></div><div class="name">| ${employee.name}</div><div class="position">| ${employee.position}</div></div>   
          `;
        })
        .join("");
      console.log(getEmployee);
      document.querySelector("#app").innerHTML = `${getEmployee}`;
    })
    .catch((error) => console.log("fetch 에러!"));
}

getData();

// function postData() {
//   fetch(url2, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: "존",
//       position: "연구원",
//       annual: 15,
//     }),
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {})
//     .catch((error) => console.log("fetch 에러!"));
// }

// postData();
function addEmployeeOnOff() {
  const x = document.getElementById("addEmployeeContainer");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function editEmployeeOnOff() {
  const x = document.getElementById("editEmployeeContainer");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggleScreen() {
  const screen = document.documentElement;
  if (true) {
    screen.requestFullscreen();
  }
}
