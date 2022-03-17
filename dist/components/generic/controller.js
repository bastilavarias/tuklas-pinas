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
const genericController = {
    fetchNationalities(_request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const nationalities = yield service_1.default.fetchNationalities();
                response.status(200).json(nationalities);
            }
            catch (errors) {
                response.status(400).json(errors);
            }
        });
    },
    fetchSexes(_request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sexes = yield service_1.default.fetchSexes();
                response.status(200).json(sexes);
            }
            catch (errors) {
                response.status(400).json(errors);
            }
        });
    },
    fetchDestinations(_request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const destinations = yield service_1.default.fetchDestinations();
                response.status(200).json(destinations);
            }
            catch (errors) {
                response.status(400).json(errors);
            }
        });
    },
    fetchTravelEvents(_request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const travelEvents = yield service_1.default.fetchTravelEvents();
                response.status(200).json(travelEvents);
            }
            catch (errors) {
                response.status(400).json(errors);
            }
        });
    },
    fetchTransportation(_request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const transportation = yield service_1.default.fetchTransportation();
                response.status(200).json(transportation);
            }
            catch (errors) {
                response.status(400).json(errors);
            }
        });
    },
};
exports.default = genericController;
//# sourceMappingURL=controller.js.map