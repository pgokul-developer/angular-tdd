import { RegisteredAccountsService } from './registered-accounts.service';
import { RegisteredAccount } from './../models/registered-account.model';
import { RegisteredAccountsRepository } from './../repositories/registered-accounts.repositories';
import { Observable, of } from 'rxjs';

describe('RegisteredAccountService', () => {
  let repository: RegisteredAccountsRepository;
  let service: RegisteredAccountsService;

  beforeEach(() => {
    repository = jasmine.createSpyObj('RegisteredAccountsRepository', ['getRawRegisteredAccounts']);
    service = new RegisteredAccountsService(repository);
  });

  it('should return a list of registered accounts asynchronously', (done: DoneFn) => {
    (repository as any).getRawRegisteredAccounts.and.returnValue(of([]));

    service.getRegisteredAccounts().subscribe({
      next: (accounts: RegisteredAccount[]) => {
        expect(accounts).toBeTruthy();
        done();
      }
    });
  });

  it('should return a list of registered accounts with a name to display, an account number, and the bank to which it belongs', (done: DoneFn) => {
    (repository as any).getRawRegisteredAccounts.and.returnValue(of([
      { number: '00093102156410', active: true, account_name: "Joseph's account", bank: 'Scotiabank' },
      { number: '00031646515422', active: true, account_name: "Mom's", bank: 'JPMorgan Chase & Co.' }
    ]));

    service.getRegisteredAccounts().subscribe({
      next: (accounts: RegisteredAccount[]) => {
        expect(accounts.length).toBe(2);
        accounts.forEach(account => {
          expect(account.displayName).toBeTruthy();
          expect(account.accountNumber).toBeTruthy();
          expect(account.bankName).toBeTruthy();
        });
        done();
      }
    })
  });

  it('should return only active accounts', (done: DoneFn) => {
    const accountNumbers: any = { active1: '00061234543122', active2: '00031646515433', inactive: '00093102156410' };

    (repository as any).getRawRegisteredAccounts.and.returnValue(of([
      { number: accountNumbers.active1, active: true, account_name: "Meredith's SA", bank: 'Bank of China' },
      { number: accountNumbers.active2, active: true, account_name: "Mom's", bank: 'JPMorgan Chase & Co.' },
      { number: accountNumbers.inactive, active: false, account_name: "Joseph's account", bank: 'Scotiabank' },
    ]));

    service.getRegisteredAccounts().subscribe({
      next: (accounts: RegisteredAccount[]) => {
        expect(accounts.length).toBe(2);
        expect(accounts.find(account => account.accountNumber === accountNumbers.active1)).toBeTruthy();
        expect(accounts.find(account => account.accountNumber === accountNumbers.active2)).toBeTruthy();
        expect(accounts.find(account => account.accountNumber === accountNumbers.inactive)).toBeUndefined();
        done();
      }
    })
  });
});