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
let PostCommentReaction = class PostCommentReaction extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PostCommentReaction.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], PostCommentReaction.prototype, "type", void 0);
__decorate([
    typeorm_1.ManyToOne(() => PostComment_1.default, (comment) => comment.reactions),
    __metadata("design:type", PostComment_1.default)
], PostCommentReaction.prototype, "comment", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Account_1.default),
    __metadata("design:type", Account_1.default)
], PostCommentReaction.prototype, "account", void 0);
PostCommentReaction = __decorate([
    typeorm_1.Entity()
], PostCommentReaction);
exports.default = PostCommentReaction;
//# sourceMappingURL=PostCommentReaction.js.map