import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '../../types/AppState';
import { Store } from '@ngrx/store';
import { ResetUserAction } from '../../../authorization/actions/ResetUserAction';

@Component({
    selector: 'app-user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.css'],
})
export class UserMenuComponent {
    @Input() userName: string;

    constructor(
        public readonly store: Store<AppState>,
        public readonly router: Router
    ) {}

    public logout() {
        this.store.dispatch(new ResetUserAction());
        this.router.navigate(['login']);
    }
}
