"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("./controller"));
const genericRouter = express_1.default.Router();
genericRouter.get("/nationalities", controller_1.default.fetchNationalities);
genericRouter.get("/sexes", controller_1.default.fetchSexes);
genericRouter.get("/destinations", controller_1.default.fetchDestinations);
genericRouter.get("/travel-events", controller_1.default.fetchTravelEvents);
genericRouter.get("/transportation", controller_1.default.fetchTransportation);
exports.default = genericRouter;
//# sourceMappingURL=router.js.map