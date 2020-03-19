import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'
import { RegisteredAccount, RawRegisteredAccount } from './../models/registered-account.model';
import { RegisteredAccountsRepository } from './../repositories/registered-accounts.repositories';

export class RegisteredAccountsService {

  constructor(private repository: RegisteredAccountsRepository) { }

  public getRegisteredAccounts(): Observable<RegisteredAccount[]> {
    return this.repository.getRawRegisteredAccounts().pipe(
      map(this.toListOfRegisteredAccounts)
    );
  }

  private toListOfRegisteredAccounts = (accounts: RawRegisteredAccount[]): RegisteredAccount[] => {
    return accounts
      .filter(account => account.active)
      .map(this.toRegisteredAccount);
  }

  private toRegisteredAccount = (account: RawRegisteredAccount): RegisteredAccount => {
    return {
      displayName: account.account_name,
      accountNumber: account.number,
      bankName: account.bank
    }
  }

}