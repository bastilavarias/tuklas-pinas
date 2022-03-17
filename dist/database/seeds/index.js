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
const index_1 = __importDefault(require("../index"));
const Nationality_1 = __importDefault(require("../entities/Nationality"));
const Sex_1 = __importDefault(require("../entities/Sex"));
const nationalities_1 = __importDefault(require("./modules/nationalities"));
const sexes_1 = __importDefault(require("./modules/sexes"));
const Destination_1 = __importDefault(require("../entities/Destination"));
const destinations_1 = __importDefault(require("./modules/destinations"));
const TravelEvent_1 = __importDefault(require("../entities/TravelEvent"));
const travelEvents_1 = __importDefault(require("./modules/travelEvents"));
const Transportation_1 = __importDefault(require("../entities/Transportation"));
const transportation_1 = __importDefault(require("./modules/transportation"));
const generateSeeds = () => __awaiter(void 0, void 0, void 0, function* () {
    const connection = yield index_1.default.init();
    yield connection
        .createQueryBuilder()
        .insert()
        .into(Nationality_1.default)
        .values(nationalities_1.default)
        .onConflict(`("name") do nothing`)
        .execute();
    yield connection
        .createQueryBuilder()
        .insert()
        .into(Sex_1.default)
        .values(sexes_1.default)
        .onConflict(`("name") do nothing`)
        .execute();
    yield connection
        .createQueryBuilder()
        .insert()
        .into(Destination_1.default)
        .values(destinations_1.default)
        .onConflict(`("name") do nothing`)
        .execute();
    yield connection
        .createQueryBuilder()
        .insert()
        .into(TravelEvent_1.default)
        .values(travelEvents_1.default)
        .onConflict(`("name") do nothing`)
        .execute();
    yield connection
        .createQueryBuilder()
        .insert()
        .into(Transportation_1.default)
        .values(transportation_1.default)
        .onConflict(`("name") do nothing`)
        .execute();
});
generateSeeds()
    .then(() => console.log("Seeds was successfully generated."))
    .catch((error) => console.log(error));
//# sourceMappingURL=index.js.map