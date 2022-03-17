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
const PostItineraryDayTimestamp_1 = __importDefault(require("./PostItineraryDayTimestamp"));
let PostItineraryDayTimestampInterest = class PostItineraryDayTimestampInterest extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PostItineraryDayTimestampInterest.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("text", { nullable: true }),
    __metadata("design:type", String)
], PostItineraryDayTimestampInterest.prototype, "name", void 0);
__decorate([
    typeorm_1.ManyToOne(() => PostItineraryDayTimestamp_1.default, (timestamp) => timestamp.interests, { onDelete: "CASCADE" }),
    __metadata("design:type", PostItineraryDayTimestamp_1.default)
], PostItineraryDayTimestampInterest.prototype, "timestamp", void 0);
PostItineraryDayTimestampInterest = __decorate([
    typeorm_1.Entity()
], PostItineraryDayTimestampInterest);
exports.default = PostItineraryDayTimestampInterest;
//# sourceMappingURL=PostItineraryDayTimestampInterest.js.map