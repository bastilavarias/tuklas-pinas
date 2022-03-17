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
const PostComment_1 = __importDefault(require("./PostComment"));
const PostCommentReplyReaction_1 = __importDefault(require("./PostCommentReplyReaction"));
let PostCommentReply = class PostCommentReply extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PostCommentReply.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("text", { nullable: false }),
    __metadata("design:type", String)
], PostCommentReply.prototype, "text", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Account_1.default),
    __metadata("design:type", Account_1.default)
], PostCommentReply.prototype, "author", void 0);
__decorate([
    typeorm_1.Column("timestamp with time zone", {
        nullable: false,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], PostCommentReply.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
        default: () => false,
    }),
    __metadata("design:type", Boolean)
], PostCommentReply.prototype, "isDeleted", void 0);
__decorate([
    typeorm_1.ManyToOne(() => PostComment_1.default, (comment) => comment.replies),
    __metadata("design:type", PostComment_1.default)
], PostCommentReply.prototype, "comment", void 0);
__decorate([
    typeorm_1.OneToMany(() => PostCommentReplyReaction_1.default, (reaction) => reaction.reply),
    typeorm_1.JoinColumn({ name: "replyId" }),
    __metadata("design:type", Array)
], PostCommentReply.prototype, "reactions", void 0);
PostCommentReply = __decorate([
    typeorm_1.Entity()
], PostCommentReply);
exports.default = PostCommentReply;
//# sourceMappingURL=PostCommentReply.js.map