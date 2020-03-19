import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromUser from '../users/reducers/user.reducer';
import { map, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private store: Store<{ user: fromUser.State }>) { }

    canActivate(/* route: ActivatedRouteSnapshot, state: RouterStateSnapshot */): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.store.pipe(
            select('user'),
            map(authed => {
                return authed.loggedIn;
            }),
            take(1)
        );
    }

}