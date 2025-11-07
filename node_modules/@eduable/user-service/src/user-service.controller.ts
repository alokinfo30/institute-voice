import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserServiceService } from './user-service.service';

@Controller()
export class UserServiceController {
  constructor(private readonly userService: UserServiceService) {}

  @MessagePattern({ cmd: 'find_user_by_email' })
  async findByEmail(@Payload() data: { email: string }) {
    return this.userService.findByEmail(data.email);
  }

  @MessagePattern({ cmd: 'find_user_by_id' })
  async findById(@Payload() data: { id: string }) {
    return this.userService.findById(data.id);
  }

  @MessagePattern({ cmd: 'create_user' })
  async create(@Payload() data: any) {
    return this.userService.create(data);
  }

  @MessagePattern({ cmd: 'update_user' })
  async update(@Payload() data: { id: string; updateData: any }) {
    return this.userService.update(data.id, data.updateData);
  }

  @MessagePattern({ cmd: 'delete_user' })
  async delete(@Payload() data: { id: string }) {
    return this.userService.delete(data.id);
  }

  @MessagePattern({ cmd: 'validate_user' })
  async validateUser(@Payload() data: { email: string; password: string }) {
    return this.userService.validateUser(data.email, data.password);
  }
}