"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const utilityService = {
    hashPassword(password) {
        const salt = bcryptjs_1.default.genSaltSync(parseInt(process.env.BCRYPT_SALT_ROUNDS));
        return bcryptjs_1.default.hashSync(password, salt);
    },
    checkErrorIfValid: (error) => {
        return Object.values(error).filter((message) => message).length > 0;
    },
    validateHashPassword(plainTextPassword, hashedPassword) {
        return bcryptjs_1.default.compareSync(plainTextPassword, hashedPassword);
    },
    selectFileFormat(mimetype) {
        switch (mimetype) {
            case "image/jpeg":
                return "jpeg";
            case "image/jpg":
                return "jpg";
            case "image/png":
                return "png";
            default:
                return "mp4";
        }
    },
};
exports.default = utilityService;
//# sourceMappingURL=service.js.map