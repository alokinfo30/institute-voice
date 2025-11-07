import { Controller, Get, Post, Body, UseGuards, Headers } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../security/guards/roles.guard';
import { Roles } from '../security/decorators/roles.decorator';
import { EnterpriseService } from './enterprise.service';

@ApiTags('enterprise')
@Controller('enterprise')
@UseGuards(JwtAuthGuard, RolesGuard)
export class EnterpriseController {
  constructor(private readonly enterpriseService: EnterpriseService) {}

  @Get('sso-config')
  @Roles('admin', 'institute_admin')
  @ApiOperation({ summary: 'Get SSO configuration' })
  async getSSOConfig(@Headers('institute-id') instituteId: string) {
    return this.enterpriseService.getSSOConfig(instituteId);
  }

  @Post('sso-config')
  @Roles('admin', 'institute_admin')
  @ApiOperation({ summary: 'Configure SSO' })
  async configureSSO(
    @Headers('institute-id') instituteId: string,
    @Body() config: any
  ) {
    return this.enterpriseService.configureSSO(instituteId, config);
  }

  @Get('compliance-report')
  @Roles('admin', 'institute_admin')
  @ApiOperation({ summary: 'Generate compliance report' })
  async generateComplianceReport(@Headers('institute-id') instituteId: string) {
    return this.enterpriseService.generateComplianceReport(instituteId);
  }

  @Post('data-export')
  @Roles('admin', 'institute_admin')
  @ApiOperation({ summary: 'Export institute data' })
  async exportData(
    @Headers('institute-id') instituteId: string,
    @Body() exportRequest: any
  ) {
    return this.enterpriseService.exportData(instituteId, exportRequest);
  }

  @Get('audit-logs')
  @Roles('admin', 'institute_admin')
  @ApiOperation({ summary: 'Get audit logs' })
  async getAuditLogs(
    @Headers('institute-id') instituteId: string,
    @Body() filters: any
  ) {
    return this.enterpriseService.getAuditLogs(instituteId, filters);
  }

  @Post('custom-domain')
  @Roles('admin', 'institute_admin')
  @ApiOperation({ summary: 'Configure custom domain' })
  async configureCustomDomain(
    @Headers('institute-id') instituteId: string,
    @Body() domainConfig: any
  ) {
    return this.enterpriseService.configureCustomDomain(instituteId, domainConfig);
  }

  @Get('api-usage')
  @Roles('admin', 'institute_admin')
  @ApiOperation({ summary: 'Get API usage statistics' })
  async getApiUsage(@Headers('institute-id') instituteId: string) {
    return this.enterpriseService.getApiUsage(instituteId);
  }
}