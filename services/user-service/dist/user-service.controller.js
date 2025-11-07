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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServiceController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const user_service_service_1 = require("./user-service.service");
let UserServiceController = class UserServiceController {
    constructor(userService) {
        this.userService = userService;
    }
    async findByEmail(data) {
        return this.userService.findByEmail(data.email);
    }
    async findById(data) {
        return this.userService.findById(data.id);
    }
    async create(data) {
        return this.userService.create(data);
    }
    async update(data) {
        return this.userService.update(data.id, data.updateData);
    }
    async delete(data) {
        return this.userService.delete(data.id);
    }
    async validateUser(data) {
        return this.userService.validateUser(data.email, data.password);
    }
};
exports.UserServiceController = UserServiceController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'find_user_by_email' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserServiceController.prototype, "findByEmail", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'find_user_by_id' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserServiceController.prototype, "findById", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'create_user' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserServiceController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'update_user' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserServiceController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'delete_user' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserServiceController.prototype, "delete", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'validate_user' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserServiceController.prototype, "validateUser", null);
exports.UserServiceController = UserServiceController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [user_service_service_1.UserServiceService])
], UserServiceController);
//# sourceMappingURL=user-service.controller.js.map