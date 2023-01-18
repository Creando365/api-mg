import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { BankAccountsController } from './controllers/bank-accounts.controller';
import { BankAccountsService } from './services/bank-accounts.service';
import { RolesController } from './controllers/roles.controller';
import { RolesService } from './services/roles.service';
import { AccessController } from './controllers/access.controller';
import { AccessService } from './services/access.service';

@Module({
  controllers: [UsersController, BankAccountsController, RolesController, AccessController],
  providers: [UsersService, BankAccountsService, RolesService, AccessService]
})
export class UsersModule {}
