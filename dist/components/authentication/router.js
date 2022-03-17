"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("./controller"));
const authenticationRouter = express_1.default.Router();
const passport_1 = __importDefault(require("passport"));
authenticationRouter.post("/signup", controller_1.default.signup);
authenticationRouter.post("/sign-in", controller_1.default.signIn);
authenticationRouter.get("/refresh-token", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.refreshToken);
exports.default = authenticationRouter;
//# sourceMappingURL=router.js.map