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
const Destination_1 = __importDefault(require("./Destination"));
const Post_1 = __importDefault(require("./Post"));
let PostDestination = class PostDestination extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PostDestination.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Post_1.default),
    __metadata("design:type", Post_1.default)
], PostDestination.prototype, "post", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Destination_1.default),
    __metadata("design:type", Destination_1.default)
], PostDestination.prototype, "destination", void 0);
PostDestination = __decorate([
    typeorm_1.Entity()
], PostDestination);
exports.default = PostDestination;
//# sourceMappingURL=PostDestination.js.map