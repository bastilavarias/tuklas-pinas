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
const Account_1 = __importDefault(require("./Account"));
const PostCommentReply_1 = __importDefault(require("./PostCommentReply"));
const PostCommentReaction_1 = __importDefault(require("./PostCommentReaction"));
let PostComment = class PostComment extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PostComment.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("text", { nullable: false }),
    __metadata("design:type", String)
], PostComment.prototype, "text", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Account_1.default),
    __metadata("design:type", Account_1.default)
], PostComment.prototype, "author", void 0);
__decorate([
    typeorm_1.Column("timestamp with time zone", {
        nullable: false,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], PostComment.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
        default: () => false,
    }),
    __metadata("design:type", Boolean)
], PostComment.prototype, "isDeleted", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Post_1.default, (post) => post.files),
    __metadata("design:type", Post_1.default)
], PostComment.prototype, "post", void 0);
__decorate([
    typeorm_1.OneToMany(() => PostCommentReply_1.default, (reply) => reply.comment),
    typeorm_1.JoinColumn({ name: "commentId" }),
    __metadata("design:type", Array)
], PostComment.prototype, "replies", void 0);
__decorate([
    typeorm_1.OneToMany(() => PostCommentReaction_1.default, (reply) => reply.comment),
    typeorm_1.JoinColumn({ name: "commentId" }),
    __metadata("design:type", Array)
], PostComment.prototype, "reactions", void 0);
PostComment = __decorate([
    typeorm_1.Entity()
], PostComment);
exports.default = PostComment;
//# sourceMappingURL=PostComment.js.map