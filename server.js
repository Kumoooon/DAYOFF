const client = require("./connection.js");
const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log(`server is running on 3000`);
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

client.connect();

app.use(express.static(__dirname + "/"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
// app.get("/wave", (req, res) => {
//   res.sendFile(__dirname + "/wave.html");
// });
// app.get("/employeeManagement", (req, res) => {
//   console.log("good");
//   res.sendFile(__dirname + "/employeeManagement.html");
// });

app.get("/employee", (req, res) => {
  client.query(`SELECT * FROM employee`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});
app.get("/eManagement", (req, res) => {
  res.sendFile(__dirname + "/eManagement.html");
});

app.post("/eManagement", (req, res) => {
  let insertQuery = `INSERT INTO public.employee (name,position,annual)VALUES('${req.body.name}','${req.body.position}',${req.body.annual})`;
  console.log(req.body);
  client.query(insertQuery, (err, result) => {
    if (!err) {
      console.log("Insertion was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

app.delete("/eManagement/:id", (req, res) => {
  let insertQuery = `DELETE FROM employee WHERE id=${req.params.id}`;
  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Deletion was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

app.put("/employee/:id", (req, res) => {
  const change = req.body;
  let updateQuery = `UPDATE employee
    set name = '${change.name}',
    position = '${change.position}',
    annual = '${change.annual}',
    WHERE id = ${req.params.id}`;
  client.query(updateQuery, (err, result) => {
    if (!err) {
      res.send("Update was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});
