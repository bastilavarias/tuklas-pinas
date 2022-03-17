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
const ProfileImage_1 = __importDefault(require("./ProfileImage"));
let Profile = class Profile extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Profile.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Profile.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Profile.prototype, "lastName", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Profile.prototype, "nationality", void 0);
__decorate([
    typeorm_1.Column("date", {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Profile.prototype, "birthDate", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Profile.prototype, "sex", void 0);
__decorate([
    typeorm_1.OneToOne(() => Account_1.default, (account) => account.profile),
    __metadata("design:type", Account_1.default)
], Profile.prototype, "account", void 0);
__decorate([
    typeorm_1.OneToOne(() => ProfileImage_1.default),
    typeorm_1.JoinColumn(),
    __metadata("design:type", ProfileImage_1.default)
], Profile.prototype, "image", void 0);
Profile = __decorate([
    typeorm_1.Entity()
], Profile);
exports.default = Profile;
//# sourceMappingURL=Profile.js.map