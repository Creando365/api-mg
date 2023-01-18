import { Module } from '@nestjs/common';
import { ContractsController } from './controllers/contracts.controller';
import { InvoicesController } from './controllers/invoices.controller';
import { ContractsService } from './services/contracts.service';
import { InvoicesService } from './services/invoices.service';

@Module({
  controllers: [ContractsController, InvoicesController],
  providers: [ContractsService, InvoicesService],
})
export class ContractsModule {}
