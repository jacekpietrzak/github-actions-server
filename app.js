const express = require("express");

const app = express();
const port = 8080;

app.get("/", (_, res) => {
  res.send("Hello, World!");
});

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Michael Johnson" },
  { id: 4, name: "Emily Davis" },
  { id: 5, name: "David Wilson" },
  { id: 6, name: "Sarah Anderson" },
  { id: 7, name: "Daniel Martinez" },
  { id: 8, name: "Olivia Taylor" },
  { id: 9, name: "Matthew Thomas" },
  { id: 10, name: "Sophia Brown" },
  { id: 11, name: "Liam Johnson" },
  { id: 12, name: "Emma Davis" },
  { id: 13, name: "Noah Wilson" },
  { id: 14, name: "Ava Anderson" },
  { id: 15, name: "James Martinez" },
];

app.get("/api/users", (_, res) => {
  res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
