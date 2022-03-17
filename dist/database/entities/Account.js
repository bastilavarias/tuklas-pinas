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
const Profile_1 = __importDefault(require("./Profile"));
const Post_1 = __importDefault(require("./Post"));
let Account = class Account extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Account.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, unique: true }),
    __metadata("design:type", String)
], Account.prototype, "email", void 0);
__decorate([
    typeorm_1.Column("text", { nullable: false }),
    __metadata("design:type", String)
], Account.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Account.prototype, "type", void 0);
__decorate([
    typeorm_1.Column("timestamp with time zone", {
        nullable: false,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], Account.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.OneToOne(() => Profile_1.default, (profile) => profile.account),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Profile_1.default)
], Account.prototype, "profile", void 0);
__decorate([
    typeorm_1.OneToMany(() => Post_1.default, (posts) => posts.author),
    typeorm_1.JoinColumn({ name: "authorId" }),
    __metadata("design:type", Array)
], Account.prototype, "travelStoryPosts", void 0);
Account = __decorate([
    typeorm_1.Entity()
], Account);
exports.default = Account;
//# sourceMappingURL=Account.js.map