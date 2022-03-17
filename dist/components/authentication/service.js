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
const validator_1 = __importDefault(require("validator"));
const model_1 = __importDefault(require("../profile/model"));
const service_1 = __importDefault(require("../utility/service"));
const model_2 = __importDefault(require("../account/model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticationService = {
    signup(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = {
                token: "",
                error: {
                    email: "",
                },
            };
            const isEmail = validator_1.default.isEmail(input.email);
            if (!isEmail) {
                result.error.email = `${input.email} is not valid email.`;
                return result;
            }
            const gotAccountDetails = yield model_2.default.getDetailsByEmail(input.email);
            const isEmailExists = !!gotAccountDetails;
            if (isEmailExists) {
                result.error.email = `${input.email} is already exists.`;
                return result;
            }
            const saveImagePayload = {
                display: process.env.DEFAULT_PROFILE_DISPLAY_IMAGE_URL,
                cover: process.env.DEFAULT_PROFILE_COVER_PHOTO_URL,
            };
            const savedImage = yield model_1.default.saveImage(saveImagePayload.display, saveImagePayload.cover);
            const profileSaveDetailsInput = {
                firstName: input.firstName,
                lastName: input.lastName,
                nationality: input.nationality,
                birthDate: input.birthDate,
                sex: input.sex,
                imageID: savedImage.id,
            };
            const savedProfileDetails = yield model_1.default.saveDetails(profileSaveDetailsInput);
            const accountSaveDetailsInput = {
                email: input.email,
                password: service_1.default.hashPassword(input.password),
                type: "client",
                profileID: savedProfileDetails.id,
            };
            const savedAccountDetails = yield model_2.default.saveDetails(accountSaveDetailsInput);
            delete savedAccountDetails.password;
            const generatedJsonWebToken = jsonwebtoken_1.default.sign(JSON.stringify(savedAccountDetails), process.env.JWT_SECRET_OR_KEY);
            result.token = `Bearer ${generatedJsonWebToken}`;
            return result;
        });
    },
    signIn(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = {
                token: "",
                error: {
                    email: "",
                    password: "",
                },
            };
            const isEmail = validator_1.default.isEmail(input.email);
            if (!isEmail) {
                result.error.email = `${input.email} is not valid email.`;
                return result;
            }
            const gotAccountDetails = yield model_2.default.getDetailsByEmail(input.email);
            const isEmailExists = !!gotAccountDetails;
            if (!isEmailExists) {
                result.error.email = `${input.email} is not exists.`;
                return result;
            }
            const isPlainTextPasswordValid = service_1.default.validateHashPassword(input.password, gotAccountDetails.password);
            if (!isPlainTextPasswordValid) {
                result.error.password = `Password is not valid.`;
                return result;
            }
            delete gotAccountDetails.password;
            const generatedJsonWebToken = jsonwebtoken_1.default.sign(JSON.stringify(gotAccountDetails), process.env.JWT_SECRET_OR_KEY);
            result.token = `Bearer ${generatedJsonWebToken}`;
            return result;
        });
    },
    refreshToken(accountID) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = {
                token: "",
            };
            const gotAccountDetails = yield model_2.default.getDetailsByID(accountID);
            const generatedJsonWebToken = jsonwebtoken_1.default.sign(JSON.stringify(gotAccountDetails), process.env.JWT_SECRET_OR_KEY);
            result.token = `Bearer ${generatedJsonWebToken}`;
            return result;
        });
    },
};
exports.default = authenticationService;
//# sourceMappingURL=service.js.map