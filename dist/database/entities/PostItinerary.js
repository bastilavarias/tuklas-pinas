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
const Post_1 = __importDefault(require("./Post"));
const PostItineraryDay_1 = __importDefault(require("./PostItineraryDay"));
const helper_1 = require("../helper");
let PostItinerary = class PostItinerary extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PostItinerary.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", Number)
], PostItinerary.prototype, "totalDestinations", void 0);
__decorate([
    typeorm_1.Column("numeric", {
        nullable: false,
        transformer: new helper_1.ColumnNumericTransformer(),
    }),
    __metadata("design:type", Number)
], PostItinerary.prototype, "totalExpenses", void 0);
__decorate([
    typeorm_1.OneToOne(() => Post_1.default, (post) => post.itinerary),
    typeorm_1.JoinColumn({ name: "postId" }),
    __metadata("design:type", Post_1.default)
], PostItinerary.prototype, "post", void 0);
__decorate([
    typeorm_1.OneToMany(() => PostItineraryDay_1.default, (postItineraryDay) => postItineraryDay.itinerary),
    typeorm_1.JoinColumn({ name: "itineraryId" }),
    __metadata("design:type", Array)
], PostItinerary.prototype, "days", void 0);
PostItinerary = __decorate([
    typeorm_1.Entity()
], PostItinerary);
exports.default = PostItinerary;
//# sourceMappingURL=PostItinerary.js.map