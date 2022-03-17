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
const cloudinary_1 = __importDefault(require("cloudinary"));
cloudinary_1.default.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
const cloudinaryService = {
    upload(file, folder) {
        return __awaiter(this, void 0, void 0, function* () {
            let meta;
            try {
                const folderPath = `${process.env.CLOUDINARY_ROOT_FOLDER_NAME}/${folder}`;
                const uploadOptions = {
                    folder: folderPath,
                    use_filename: true,
                    resource_type: "auto",
                };
                const result = yield cloudinary_1.default.v2.uploader.upload(file.path, uploadOptions);
                meta = {
                    url: result.secure_url,
                    publicID: result.public_id,
                    format: result.format,
                    fileName: result.original_filename,
                };
            }
            catch (error) {
                console.log(error);
                meta = {
                    url: "",
                    publicID: "",
                    format: "",
                    fileName: "",
                };
            }
            return meta;
        });
    },
    delete: (publicID) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield cloudinary_1.default.v2.uploader.destroy(publicID);
        }
        catch (error) {
            console.log(error);
        }
    }),
};
exports.default = cloudinaryService;
//# sourceMappingURL=service.js.map