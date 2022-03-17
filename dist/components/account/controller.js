"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = __importDefault(require("./service"));
const accountController = {
    getPosts(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const accountID = parseInt(request.params.accountID) || 0;
                const gotPosts = yield service_1.default.getPosts(accountID);
                response.status(200).json(gotPosts);
            }
            catch (error) {
                console.log(error);
                response.status(400).json(error);
            }
        });
    },
    getDiscoveryCoordination(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const accountID = parseInt(request.params.accountID) || 0;
                const gotCoordination = yield service_1.default.getDiscoveryCoordination(accountID);
                response.status(200).json(gotCoordination);
            }
            catch (error) {
                console.log(error);
                response.status(400).json(error);
            }
        });
    },
    getInformation(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const accountID = parseInt(request.params.accountID) || 0;
                const gotInformation = yield service_1.default.getInformation(accountID);
                response.status(200).json(gotInformation);
            }
            catch (error) {
                console.log(error);
                response.status(400).json(error);
            }
        });
    },
};
exports.default = accountController;
//# sourceMappingURL=controller.js.map