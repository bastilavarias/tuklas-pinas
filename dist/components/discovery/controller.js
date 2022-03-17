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
const discoveryController = {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = {
                    coordination: {
                        latitude: parseFloat(request.params.latitude) || 0.0,
                        longitude: parseFloat(request.params.longitude) || 0.0,
                    },
                    placeName: request.params.placeName || "",
                    country: request.params.country || "",
                };
                const authorID = parseInt(request.user.id) || 0;
                const input = {
                    text: request.body.text || "",
                    rating: parseInt(request.body.rating) || 0,
                    files: request.files || [],
                };
                const result = yield service_1.default.create(authorID, payload, input);
                response.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                response.status(400).json(error);
            }
        });
    },
    fetch(_, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const fetchedCoordination = yield service_1.default.fetch();
                response.status(200).json(fetchedCoordination);
            }
            catch (error) {
                console.log(error);
                response.status(400).json(error);
            }
        });
    },
    getPlaceDetails(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const coordination = {
                    latitude: parseFloat(request.params.latitude) || 0.0,
                    longitude: parseFloat(request.params.longitude) || 0.0,
                };
                const gotPlaceDetails = yield service_1.default.getPlaceDetails(coordination);
                response.status(200).json(gotPlaceDetails);
            }
            catch (error) {
                console.log(error);
                response.status(400).json(error);
            }
        });
    },
};
exports.default = discoveryController;
//# sourceMappingURL=controller.js.map