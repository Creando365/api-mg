import { BankAccountDto } from './bank-account.dto';

describe('BankAccountDto', () => {
  it('should be defined', () => {
    expect(new BankAccountDto()).toBeDefined();
  });
});
