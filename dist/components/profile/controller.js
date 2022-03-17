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
const profileController = {
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const profileID = parseInt(request.params.profileID) || 0;
                const input = {
                    firstName: request.body.firstName || "",
                    lastName: request.body.lastName || "",
                    nationality: request.body.nationality || "",
                    birthDate: request.body.birthDate || "",
                    sex: request.body.sex || "",
                    displayImage: request.files.displayImage
                        ?
                            request.files.displayImage[0]
                        : null,
                    coverPhoto: request.files.coverPhoto
                        ?
                            request.files.coverPhoto[0]
                        : null,
                };
                const result = yield service_1.default.update(profileID, input);
                response.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                response.status(400).json(error);
            }
        });
    },
};
exports.default = profileController;
//# sourceMappingURL=controller.js.map