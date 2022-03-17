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
const Nationality_1 = __importDefault(require("../../database/entities/Nationality"));
const Sex_1 = __importDefault(require("../../database/entities/Sex"));
const Destination_1 = __importDefault(require("../../database/entities/Destination"));
const TravelEvent_1 = __importDefault(require("../../database/entities/TravelEvent"));
const Transportation_1 = __importDefault(require("../../database/entities/Transportation"));
const genericModel = {
    fetchNationalities() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Nationality_1.default.find();
        });
    },
    fetchSexes() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Sex_1.default.find();
        });
    },
    fetchDestinations() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Destination_1.default.find();
        });
    },
    getDestination(destinationID) {
        return __awaiter(this, void 0, void 0, function* () {
            const gotDestination = yield Destination_1.default.findOne(destinationID);
            return gotDestination;
        });
    },
    fetchTravelEvents() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield TravelEvent_1.default.find();
        });
    },
    getTravelEvent(travelEventID) {
        return __awaiter(this, void 0, void 0, function* () {
            const gotTravelEvent = yield TravelEvent_1.default.findOne(travelEventID);
            return gotTravelEvent;
        });
    },
    fetchTransportation() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Transportation_1.default.find();
        });
    },
};
exports.default = genericModel;
//# sourceMappingURL=model.js.map