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
let PostCategory = class PostCategory extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PostCategory.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Post_1.default, (post) => post.categories),
    __metadata("design:type", Post_1.default)
], PostCategory.prototype, "post", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], PostCategory.prototype, "name", void 0);
PostCategory = __decorate([
    typeorm_1.Entity()
], PostCategory);
exports.default = PostCategory;
//# sourceMappingURL=PostCategory.js.map