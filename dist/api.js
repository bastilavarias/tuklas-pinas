"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./components/generic/router"));
const router_2 = __importDefault(require("./components/account/router"));
const router_3 = __importDefault(require("./components/authentication/router"));
const router_4 = __importDefault(require("./components/post/router"));
const router_5 = __importDefault(require("./components/profile/router"));
const router_6 = __importDefault(require("./components/discovery/router"));
const api = express_1.default();
api.use("/generic", router_1.default);
api.use("/account", router_2.default);
api.use("/authentication", router_3.default);
api.use("/post", router_4.default);
api.use("/profile", router_5.default);
api.use("/discovery", router_6.default);
exports.default = api;
//# sourceMappingURL=api.js.map