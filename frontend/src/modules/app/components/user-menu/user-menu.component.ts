import { Component, Input } from '@angular/core';
import { AuthorizationService } from '../../../authorization/service/authorization.service';

@Component({
    selector: 'app-user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.css'],
})
export class UserMenuComponent {
    @Input() userName: string;

    constructor(public readonly authService: AuthorizationService) {}

    public logout() {
        this.authService.logout();
    }
}
