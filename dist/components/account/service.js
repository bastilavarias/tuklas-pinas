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
const model_1 = __importDefault(require("../post/model"));
const model_2 = __importDefault(require("../discovery/model"));
const model_3 = __importDefault(require("./model"));
const accountService = {
    getPosts(accountID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield model_1.default.getAccountPosts(accountID);
        });
    },
    getDiscoveryCoordination(accountID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield model_2.default.getAccountCoordination(accountID);
        });
    },
    getInformation(accountID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield model_3.default.getDetailsByID(accountID);
        });
    },
};
exports.default = accountService;
//# sourceMappingURL=service.js.map