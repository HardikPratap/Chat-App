import express from "express";
import { signup } from "../controllers/auth.controler.js";

const Router = express.Router();

Router.post("/signup", signup);
Router.get("/check", (req, res) => {
  res.send("Check POint Auth");
});
Router.post("/login", (req, res) => {
  res.send("Login POint");
});
Router.post("/logout", (req, res) => {
  res.send("Logout POint");
});

export default Router;
