import express from "express";
import genericRouter from "./components/generic/router";
import accountRouter from "./components/account/router";
import authenticationRouter from "./components/authentication/router";
import postRouter from "./components/post/router";
const api = express();

api.use("/generic", genericRouter);
api.use("/account", accountRouter);
api.use("/authentication", authenticationRouter);
api.use("/post", postRouter);

export default api;
