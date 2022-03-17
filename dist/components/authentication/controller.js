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
const service_2 = __importDefault(require("../utility/service"));
const authenticationController = {
    signup(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const input = request.body;
                const result = yield service_1.default.signup(input);
                if (service_2.default.checkErrorIfValid(result.error))
                    throw result.error;
                delete result.error;
                response.status(200).json(result);
            }
            catch (error) {
                response.status(400).json(error);
            }
        });
    },
    signIn(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const input = request.body;
                const result = yield service_1.default.signIn(input);
                if (service_2.default.checkErrorIfValid(result.error))
                    throw result.error;
                delete result.error;
                response.status(200).json(result);
            }
            catch (error) {
                response.status(400).json(error);
            }
        });
    },
    refreshToken(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const accountID = request.user.id;
                const result = yield service_1.default.refreshToken(accountID);
                response.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                response.status(400).json(error);
            }
        });
    },
};
exports.default = authenticationController;
//# sourceMappingURL=controller.js.map