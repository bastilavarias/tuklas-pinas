"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const controller_1 = __importDefault(require("./controller"));
const accountRouter = express_1.default.Router();
accountRouter.get("/:accountID", controller_1.default.getInformation);
accountRouter.get("/posts/:accountID", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.getPosts);
accountRouter.get("/discovery-coordination/:accountID", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.getDiscoveryCoordination);
exports.default = accountRouter;
//# sourceMappingURL=router.js.map