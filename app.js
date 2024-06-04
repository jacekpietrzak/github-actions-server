import express from "express";

const app = express();
const port = 3000;

app.get("/", (_, res) => {
  res.send("Hello, World!");
});
app.get("/about", (_, res) => {
  res.send("About page");
});

app.get("/contact", (_, res) => {
  res.send("Contact page");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
