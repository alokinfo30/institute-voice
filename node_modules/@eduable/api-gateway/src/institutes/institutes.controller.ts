import { Controller, Get, Param, Put, Body, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { InstitutesService } from './institutes.service';

@ApiTags('institutes')
@Controller('institutes')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class InstitutesController {
  constructor(private readonly institutesService: InstitutesService) {}

  @Get('my-institute')
  @ApiOperation({ summary: 'Get current user institute' })
  async getMyInstitute(@Request() req) {
    return this.institutesService.findById(req.user.instituteId);
  }

  @Get('my-institute/stats')
  @ApiOperation({ summary: 'Get institute statistics' })
  async getInstituteStats(@Request() req) {
    return this.institutesService.getStats(req.user.instituteId);
  }

  @Put('my-institute')
  @ApiOperation({ summary: 'Update institute settings' })
  async updateInstitute(@Request() req, @Body() updateData: any) {
    return this.institutesService.update(req.user.instituteId, updateData);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get institute by ID' })
  async getInstitute(@Param('id') id: string) {
    return this.institutesService.findById(id);
  }
}