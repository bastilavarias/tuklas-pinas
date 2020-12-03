import express from "express";
import discoveryController from "./controller";
import multer from "../../multer";
import passport from "passport";
const discoveryRouter = express.Router();

discoveryRouter.post(
  "/create/:placeName/:country/:latitude/:longitude",
  multer.array("files"),
  passport.authenticate("jwt", { session: false }),
  discoveryController.create
);

discoveryRouter.get("/coordination", discoveryController.fetchCoordination);

export default discoveryRouter;
