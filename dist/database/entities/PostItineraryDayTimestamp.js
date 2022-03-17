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
const Destination_1 = __importDefault(require("./Destination"));
const PostItineraryDay_1 = __importDefault(require("./PostItineraryDay"));
const PostItineraryDayTimestampInterest_1 = __importDefault(require("./PostItineraryDayTimestampInterest"));
const helper_1 = require("../helper");
let PostItineraryDayTimestamp = class PostItineraryDayTimestamp extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PostItineraryDayTimestamp.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("time", {
        nullable: false,
    }),
    __metadata("design:type", Date)
], PostItineraryDayTimestamp.prototype, "time", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
    }),
    __metadata("design:type", String)
], PostItineraryDayTimestamp.prototype, "transportation", void 0);
__decorate([
    typeorm_1.Column("numeric", {
        nullable: true,
        transformer: new helper_1.ColumnNumericTransformer(),
    }),
    __metadata("design:type", Number)
], PostItineraryDayTimestamp.prototype, "fare", void 0);
__decorate([
    typeorm_1.Column("numeric", {
        nullable: false,
        transformer: new helper_1.ColumnNumericTransformer(),
    }),
    __metadata("design:type", Number)
], PostItineraryDayTimestamp.prototype, "expenses", void 0);
__decorate([
    typeorm_1.Column("text", { nullable: true }),
    __metadata("design:type", String)
], PostItineraryDayTimestamp.prototype, "otherDetails", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Destination_1.default),
    __metadata("design:type", Destination_1.default)
], PostItineraryDayTimestamp.prototype, "destination", void 0);
__decorate([
    typeorm_1.ManyToOne(() => PostItineraryDay_1.default, (day) => day.timestamps, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", PostItineraryDay_1.default)
], PostItineraryDayTimestamp.prototype, "itineraryDay", void 0);
__decorate([
    typeorm_1.OneToMany(() => PostItineraryDayTimestampInterest_1.default, (interest) => interest.timestamp),
    typeorm_1.JoinColumn({ name: "timestampId" }),
    __metadata("design:type", Array)
], PostItineraryDayTimestamp.prototype, "interests", void 0);
PostItineraryDayTimestamp = __decorate([
    typeorm_1.Entity()
], PostItineraryDayTimestamp);
exports.default = PostItineraryDayTimestamp;
//# sourceMappingURL=PostItineraryDayTimestamp.js.map