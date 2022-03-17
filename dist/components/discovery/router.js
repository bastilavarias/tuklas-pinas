"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("./controller"));
const multer_1 = __importDefault(require("../../multer"));
const passport_1 = __importDefault(require("passport"));
const discoveryRouter = express_1.default.Router();
discoveryRouter.post("/create/:placeName/:country/:latitude/:longitude", multer_1.default.array("files"), passport_1.default.authenticate("jwt", { session: false }), controller_1.default.create);
discoveryRouter.get("/", controller_1.default.fetch);
discoveryRouter.get("/place-details/:latitude/:longitude", controller_1.default.getPlaceDetails);
exports.default = discoveryRouter;
//# sourceMappingURL=router.js.map