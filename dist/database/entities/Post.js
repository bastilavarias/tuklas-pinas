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
const Account_1 = __importDefault(require("./Account"));
const PostFile_1 = __importDefault(require("./PostFile"));
const PostCategory_1 = __importDefault(require("./PostCategory"));
const PostReaction_1 = __importDefault(require("./PostReaction"));
const PostComment_1 = __importDefault(require("./PostComment"));
const PostTravelEvent_1 = __importDefault(require("./PostTravelEvent"));
const PostDestination_1 = __importDefault(require("./PostDestination"));
const PostReview_1 = __importDefault(require("./PostReview"));
const PostItinerary_1 = __importDefault(require("./PostItinerary"));
let Post = class Post extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Post.prototype, "id", void 0);
__decorate([
    typeorm_1.Index({ fulltext: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    typeorm_1.Index({ fulltext: true }),
    typeorm_1.Column("text", { nullable: true }),
    __metadata("design:type", String)
], Post.prototype, "text", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Post.prototype, "type", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", Boolean)
], Post.prototype, "isDraft", void 0);
__decorate([
    typeorm_1.Column("timestamp with time zone", {
        nullable: false,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], Post.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column("timestamp with time zone", {
        nullable: false,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], Post.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
        default: () => false,
    }),
    __metadata("design:type", Boolean)
], Post.prototype, "isDeleted", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Account_1.default),
    __metadata("design:type", Account_1.default)
], Post.prototype, "author", void 0);
__decorate([
    typeorm_1.OneToMany(() => PostFile_1.default, (files) => files.post),
    typeorm_1.JoinColumn({ name: "postId" }),
    __metadata("design:type", Array)
], Post.prototype, "files", void 0);
__decorate([
    typeorm_1.OneToMany(() => PostCategory_1.default, (categories) => categories.post),
    typeorm_1.JoinColumn({ name: "postId" }),
    __metadata("design:type", Array)
], Post.prototype, "categories", void 0);
__decorate([
    typeorm_1.OneToMany(() => PostTravelEvent_1.default, (travelEvent) => travelEvent.post),
    typeorm_1.JoinColumn({ name: "postId" }),
    __metadata("design:type", Array)
], Post.prototype, "travelEvents", void 0);
__decorate([
    typeorm_1.OneToMany(() => PostDestination_1.default, (destination) => destination.post),
    typeorm_1.JoinColumn({ name: "postId" }),
    __metadata("design:type", Array)
], Post.prototype, "destinations", void 0);
__decorate([
    typeorm_1.OneToMany(() => PostComment_1.default, (comment) => comment.post),
    typeorm_1.JoinColumn({ name: "postId" }),
    __metadata("design:type", Array)
], Post.prototype, "comments", void 0);
__decorate([
    typeorm_1.OneToMany(() => PostReaction_1.default, (reaction) => reaction.post),
    typeorm_1.JoinColumn({ name: "postId" }),
    __metadata("design:type", Array)
], Post.prototype, "reactions", void 0);
__decorate([
    typeorm_1.OneToOne(() => PostReview_1.default, (review) => review.post),
    __metadata("design:type", PostReview_1.default)
], Post.prototype, "review", void 0);
__decorate([
    typeorm_1.OneToOne(() => PostItinerary_1.default, (itinerary) => itinerary.post),
    __metadata("design:type", PostItinerary_1.default)
], Post.prototype, "itinerary", void 0);
Post = __decorate([
    typeorm_1.Entity()
], Post);
exports.default = Post;
//# sourceMappingURL=Post.js.map