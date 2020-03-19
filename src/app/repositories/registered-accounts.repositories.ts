import { RawRegisteredAccount } from './../models/registered-account.model';
import { Observable, of } from 'rxjs';

export class RegisteredAccountsRepository {
    public getRawRegisteredAccounts(): Observable<RawRegisteredAccount[]> {
        return of([]);
    }
}