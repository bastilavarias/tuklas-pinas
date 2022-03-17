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
const model_1 = __importDefault(require("./model"));
const service_1 = __importDefault(require("../cloudinary/service"));
const profileService = {
    update(profileID, input) {
        return __awaiter(this, void 0, void 0, function* () {
            const gotDetails = yield model_1.default.getDetails(profileID);
            if (input.displayImage) {
                const folder = "profile/display-images";
                const uploadedImage = yield service_1.default.upload(input.displayImage, folder);
                yield model_1.default.updateDisplayImage(gotDetails.image.id, uploadedImage.url);
            }
            if (input.coverPhoto) {
                const folder = "profile/cover-photos";
                const uploadedImage = yield service_1.default.upload(input.coverPhoto, folder);
                yield model_1.default.updateCoverPhoto(gotDetails.image.id, uploadedImage.url);
            }
            return yield model_1.default.updateDetails(profileID, input);
        });
    },
};
exports.default = profileService;
//# sourceMappingURL=service.js.map