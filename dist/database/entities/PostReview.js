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
const PostReviewRestaurant_1 = __importDefault(require("./PostReviewRestaurant"));
const PostReviewLodging_1 = __importDefault(require("./PostReviewLodging"));
const PostReviewTransportation_1 = __importDefault(require("./PostReviewTransportation"));
const PostReviewActivity_1 = __importDefault(require("./PostReviewActivity"));
const PostReviewInternetAccess_1 = __importDefault(require("./PostReviewInternetAccess"));
const PostReviewFinance_1 = __importDefault(require("./PostReviewFinance"));
const PostReviewTip_1 = __importDefault(require("./PostReviewTip"));
const PostReviewAvoid_1 = __importDefault(require("./PostReviewAvoid"));
let PostReview = class PostReview extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PostReview.prototype, "id", void 0);
__decorate([
    typeorm_1.OneToOne(() => Post_1.default, (post) => post.review),
    typeorm_1.JoinColumn({ name: "postId" }),
    __metadata("design:type", Post_1.default)
], PostReview.prototype, "post", void 0);
__decorate([
    typeorm_1.OneToMany(() => PostReviewRestaurant_1.default, (table) => table.review),
    typeorm_1.JoinColumn({ name: "reviewId" }),
    __metadata("design:type", Array)
], PostReview.prototype, "restaurants", void 0);
__decorate([
    typeorm_1.OneToMany(() => PostReviewLodging_1.default, (table) => table.review),
    typeorm_1.JoinColumn({ name: "reviewId" }),
    __metadata("design:type", Array)
], PostReview.prototype, "lodgings", void 0);
__decorate([
    typeorm_1.OneToMany(() => PostReviewTransportation_1.default, (table) => table.review),
    typeorm_1.JoinColumn({ name: "reviewId" }),
    __metadata("design:type", Array)
], PostReview.prototype, "transportation", void 0);
__decorate([
    typeorm_1.OneToMany(() => PostReviewActivity_1.default, (table) => table.review),
    typeorm_1.JoinColumn({ name: "reviewId" }),
    __metadata("design:type", Array)
], PostReview.prototype, "activities", void 0);
__decorate([
    typeorm_1.OneToOne(() => PostReviewInternetAccess_1.default),
    typeorm_1.JoinColumn({ name: "internetAccessId" }),
    __metadata("design:type", PostReviewInternetAccess_1.default)
], PostReview.prototype, "internetAccess", void 0);
__decorate([
    typeorm_1.OneToOne(() => PostReviewFinance_1.default),
    typeorm_1.JoinColumn({ name: "financeId" }),
    __metadata("design:type", PostReviewFinance_1.default)
], PostReview.prototype, "finance", void 0);
__decorate([
    typeorm_1.OneToMany(() => PostReviewTip_1.default, (table) => table.review),
    typeorm_1.JoinColumn({ name: "reviewId" }),
    __metadata("design:type", Array)
], PostReview.prototype, "tips", void 0);
__decorate([
    typeorm_1.OneToMany(() => PostReviewAvoid_1.default, (table) => table.review),
    typeorm_1.JoinColumn({ name: "reviewId" }),
    __metadata("design:type", Array)
], PostReview.prototype, "avoids", void 0);
PostReview = __decorate([
    typeorm_1.Entity()
], PostReview);
exports.default = PostReview;
//# sourceMappingURL=PostReview.js.map