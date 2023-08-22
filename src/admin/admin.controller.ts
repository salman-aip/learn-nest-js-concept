import { Controller, Get, HostParam } from '@nestjs/common';

@Controller({ host: 'admin.example.com' })
export class AdminController {
  @Get()
  getInfo(@HostParam('account') account: string) {
    return account;
  }

  index(): string {
    return 'Admin page';
  }
}
