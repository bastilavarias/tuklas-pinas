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
const Profile_1 = __importDefault(require("../../database/entities/Profile"));
const ProfileImage_1 = __importDefault(require("../../database/entities/ProfileImage"));
const profileModel = {
    saveDetails(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { firstName, lastName, nationality, birthDate, sex, imageID } = input;
            return yield Profile_1.default.create({
                firstName,
                lastName,
                nationality,
                birthDate,
                sex,
                image: {
                    id: imageID,
                },
            }).save();
        });
    },
    updateDetails(profileID, input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { firstName, lastName, nationality, birthDate, sex } = input;
            yield Profile_1.default.update(profileID, {
                firstName,
                lastName,
                nationality,
                birthDate,
                sex,
            });
            return yield this.getDetails(profileID);
        });
    },
    saveImage(display, cover) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ProfileImage_1.default.create({
                display,
                cover,
            }).save();
        });
    },
    getDetails(profileID) {
        return __awaiter(this, void 0, void 0, function* () {
            const gotDetails = yield Profile_1.default.findOne(profileID, {
                relations: ["image"],
            });
            return gotDetails;
        });
    },
    updateDisplayImage(imageID, url) {
        return __awaiter(this, void 0, void 0, function* () {
            yield ProfileImage_1.default.update({ id: imageID }, { display: url });
        });
    },
    updateCoverPhoto(imageID, url) {
        return __awaiter(this, void 0, void 0, function* () {
            yield ProfileImage_1.default.update({ id: imageID }, { cover: url });
        });
    },
};
exports.default = profileModel;
//# sourceMappingURL=model.js.map