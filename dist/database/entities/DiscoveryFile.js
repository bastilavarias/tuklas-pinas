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
const Discovery_1 = __importDefault(require("./Discovery"));
let DiscoveryFile = class DiscoveryFile extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], DiscoveryFile.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("text", { nullable: false }),
    __metadata("design:type", String)
], DiscoveryFile.prototype, "url", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], DiscoveryFile.prototype, "publicID", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], DiscoveryFile.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("bigint", { nullable: false }),
    __metadata("design:type", Number)
], DiscoveryFile.prototype, "size", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], DiscoveryFile.prototype, "type", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], DiscoveryFile.prototype, "format", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Discovery_1.default, (discovery) => discovery.files),
    __metadata("design:type", Discovery_1.default)
], DiscoveryFile.prototype, "discovery", void 0);
DiscoveryFile = __decorate([
    typeorm_1.Entity()
], DiscoveryFile);
exports.default = DiscoveryFile;
//# sourceMappingURL=DiscoveryFile.js.map