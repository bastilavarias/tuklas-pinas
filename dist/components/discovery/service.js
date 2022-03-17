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
const service_2 = __importDefault(require("../utility/service"));
const discoveryService = {
    create(authorID, payload, input) {
        return __awaiter(this, void 0, void 0, function* () {
            const savedDetails = yield model_1.default.saveDetails(authorID, payload, input);
            if (input.files.length > 0) {
                yield Promise.all(input.files.map((file) => __awaiter(this, void 0, void 0, function* () {
                    const folder = "discoveries";
                    const uploadedFileMeta = yield service_1.default.upload(file, folder);
                    const payload = {
                        publicID: uploadedFileMeta.publicID,
                        name: file.originalname,
                        fileName: "",
                        url: uploadedFileMeta.url,
                        size: file.size,
                        type: file.mimetype,
                        format: service_2.default.selectFileFormat(file.mimetype),
                    };
                    yield model_1.default.saveFile(savedDetails.id, payload);
                })));
            }
            return yield model_1.default.get(savedDetails.id);
        });
    },
    fetch() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield model_1.default.fetch();
        });
    },
    getPlaceDetails(coordination) {
        return __awaiter(this, void 0, void 0, function* () {
            const fetchedDiscoveries = yield model_1.default.fetchByCoordination(coordination);
            if (fetchedDiscoveries.length > 0) {
                const firstSelection = fetchedDiscoveries[0];
                return {
                    name: firstSelection.placeName,
                    country: firstSelection.country,
                    coordination: firstSelection.coordination,
                    experiences: fetchedDiscoveries,
                };
            }
            return {
                name: "",
                country: "",
                coordination: { latitude: 0.0, longitude: 0.0 },
                experiences: [],
            };
        });
    },
};
exports.default = discoveryService;
//# sourceMappingURL=service.js.map