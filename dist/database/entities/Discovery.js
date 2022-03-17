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
const DiscoveryFile_1 = __importDefault(require("./DiscoveryFile"));
const helper_1 = require("../helper");
let Discovery = class Discovery extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Discovery.prototype, "id", void 0);
__decorate([
    typeorm_1.Index({ fulltext: true }),
    typeorm_1.Column("text", { nullable: true }),
    __metadata("design:type", String)
], Discovery.prototype, "placeName", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Discovery.prototype, "country", void 0);
__decorate([
    typeorm_1.Column("point", {
        nullable: false,
        transformer: helper_1.ColumnCoordinationTransformer,
    }),
    __metadata("design:type", Object)
], Discovery.prototype, "coordination", void 0);
__decorate([
    typeorm_1.Index({ fulltext: true }),
    typeorm_1.Column("text", { nullable: true }),
    __metadata("design:type", String)
], Discovery.prototype, "text", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Number)
], Discovery.prototype, "rating", void 0);
__decorate([
    typeorm_1.Column("timestamp with time zone", {
        nullable: false,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], Discovery.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column("timestamp with time zone", {
        nullable: false,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], Discovery.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
        default: () => false,
    }),
    __metadata("design:type", Boolean)
], Discovery.prototype, "isDeleted", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Account_1.default),
    __metadata("design:type", Account_1.default)
], Discovery.prototype, "author", void 0);
__decorate([
    typeorm_1.OneToMany(() => DiscoveryFile_1.default, (files) => files.discovery),
    typeorm_1.JoinColumn({ name: "discoveryId" }),
    __metadata("design:type", Array)
], Discovery.prototype, "files", void 0);
Discovery = __decorate([
    typeorm_1.Entity()
], Discovery);
exports.default = Discovery;
//# sourceMappingURL=Discovery.js.map