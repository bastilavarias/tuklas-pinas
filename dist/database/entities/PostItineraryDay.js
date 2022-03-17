"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const PostItinerary_1 = __importDefault(require("./PostItinerary"));
const PostItineraryDayTimestamp_1 = __importDefault(require("./PostItineraryDayTimestamp"));
const helper_1 = require("../helper");
let PostItineraryDay = class PostItineraryDay extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PostItineraryDay.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("date", {
        nullable: false,
    }),
    __metadata("design:type", Date)
], PostItineraryDay.prototype, "date", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", Number)
], PostItineraryDay.prototype, "day", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", Number)
], PostItineraryDay.prototype, "destinationsCount", void 0);
__decorate([
    typeorm_1.Column("numeric", {
        nullable: false,
        transformer: new helper_1.ColumnNumericTransformer(),
    }),
    __metadata("design:type", Number)
], PostItineraryDay.prototype, "expenses", void 0);
__decorate([
    typeorm_1.ManyToOne(() => PostItinerary_1.default),
    __metadata("design:type", PostItinerary_1.default)
], PostItineraryDay.prototype, "itinerary", void 0);
__decorate([
    typeorm_1.OneToMany(() => PostItineraryDayTimestamp_1.default, (postItineraryDayTimestamp) => postItineraryDayTimestamp.itineraryDay),
    typeorm_1.JoinColumn({ name: "itineraryDayId" }),
    __metadata("design:type", Array)
], PostItineraryDay.prototype, "timestamps", void 0);
PostItineraryDay = __decorate([
    typeorm_1.Entity()
], PostItineraryDay);
exports.default = PostItineraryDay;
//# sourceMappingURL=PostItineraryDay.js.map