const postsList = document.querySelector(".posts-list");
const addPostForm = document.querySelector(".add-post-form");
const nameValue = document.getElementById("name");
const positionValue = document.getElementById("position");
const annualValue = document.getElementById("annual");
const url = "http://localhost:3000/employee";
const url2 = "http://localhost:3000/eManagement";
let output = "";
const renderPosts = (posts) => {
  posts.forEach((post) => {
    output += `<div class = "userList" ><div class = "person"  onclick="editEmployeeOnOff()"></div><div class="name">| ${post.name}</div><div class="position">| ${post.position}</div></div>
`;
  });
  postsList.innerHTML = output;
};
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    renderPosts(data);
  });
postsList.addEventListener("click", () => {
  console.log("halo");
});
addPostForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(url2, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: nameValue.value,
      position: positionValue.value,
      annual: annualValue.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      const dataArr = [];
      dataArr.push(data);
      renderPosts(data);
    });
});

//http://localhost:3000/employee

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
