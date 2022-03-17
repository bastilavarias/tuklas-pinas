"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const profileRouter = express_1.default.Router();
const passport_1 = __importDefault(require("passport"));
const controller_1 = __importDefault(require("./controller"));
const multer_1 = __importDefault(require("../../multer"));
profileRouter.put("/update/:profileID", passport_1.default.authenticate("jwt", { session: false }), multer_1.default.fields([
    { name: "displayImage", maxCount: 1 },
    { name: "coverPhoto", maxCount: 1 },
]), controller_1.default.update);
exports.default = profileRouter;
//# sourceMappingURL=router.js.map