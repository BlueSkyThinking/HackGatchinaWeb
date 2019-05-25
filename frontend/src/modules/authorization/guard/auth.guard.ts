import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../app/types/AppState';
import { selectUser } from '../selectors/selectUser';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    private readonly isUserExist$: Observable<boolean>;

    constructor(private readonly store: Store<AppState>) {
        this.isUserExist$ = this.store.pipe(
            select(selectUser),
            map(user => !!user)
        );
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        return this.isUserExist$;
    }
}
