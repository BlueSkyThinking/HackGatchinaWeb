import { Component } from '@angular/core';
import { AppState } from '../../types/AppState';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUserName } from '../../../authorization/selectors/selectUserName';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
    public userName$: Observable<string>;

    constructor(public readonly store: Store<AppState>) {
        this.userName$ = this.store.pipe(select(selectUserName));
    }
}
