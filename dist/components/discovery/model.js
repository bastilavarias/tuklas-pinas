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
const Discovery_1 = __importDefault(require("../../database/entities/Discovery"));
const DiscoveryFile_1 = __importDefault(require("../../database/entities/DiscoveryFile"));
const typeorm_1 = require("typeorm");
const discoveryModel = {
    saveDetails(authorID, payload, input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { placeName, coordination, country } = payload;
            const { text, rating } = input;
            return yield Discovery_1.default.create({
                author: { id: authorID },
                placeName,
                country,
                coordination,
                text,
                rating,
            }).save();
        });
    },
    saveFile(discoveryID, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { url, publicID, format, name, size, type } = payload;
            yield DiscoveryFile_1.default.create({
                url,
                publicID,
                format,
                name,
                size,
                type,
                discovery: { id: discoveryID },
            }).save();
        });
    },
    get(discoveryID) {
        return __awaiter(this, void 0, void 0, function* () {
            const gotDetails = yield Discovery_1.default.findOne(discoveryID, {
                relations: ["author", "author.profile", "author.profile.image", "files"],
            });
            delete gotDetails.author.password;
            return gotDetails;
        });
    },
    fetch() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield typeorm_1.getRepository(Discovery_1.default)
                .createQueryBuilder("discovery")
                .distinctOn([`"placeName"`])
                .select([`"placeName"`, "country", "coordination"])
                .getRawMany();
        });
    },
    fetchByCoordination(coordination) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield typeorm_1.getRepository(Discovery_1.default)
                .createQueryBuilder("discovery")
                .select(["id"])
                .where(`coordination ~= '${coordination.latitude},${coordination.longitude}'`)
                .orderBy(`"createdAt"`, "DESC")
                .getRawMany()
                .then((results) => __awaiter(this, void 0, void 0, function* () {
                return Promise.all(results.map((discovery) => __awaiter(this, void 0, void 0, function* () { return yield this.get(discovery.id); })));
            }));
        });
    },
    getAccountCoordination(accountID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield typeorm_1.getRepository(Discovery_1.default)
                .createQueryBuilder("discovery")
                .distinctOn([`"placeName"`])
                .select(["coordination"])
                .where(`"authorId" = :accountID`, { accountID })
                .getRawMany();
        });
    },
};
exports.default = discoveryModel;
//# sourceMappingURL=model.js.map