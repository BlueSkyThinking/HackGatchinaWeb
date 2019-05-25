import { Component } from '@angular/core';
import { LoginParameters } from '../../types/LoginParameters';
import { Router } from '@angular/router';
import { AppState } from '../../../app/types/AppState';
import { Store } from '@ngrx/store';
import { SetUserAction } from '../../actions/SetUserAction';
import { AuthorizationService } from '../../service/authorization.service';

@Component({
    selector: 'app-login-container',
    template: `
        <div class="page">
            <mat-card class="block">
                <div class="grid">
                    <div class="header">GatchinaTrip</div>
                    <app-login-content
                        [parameters]="parameters"
                        (onchange)="handleChange($event)"
                    ></app-login-content>
                    <div class="actions">
                        <button
                            mat-button
                            color="accent"
                            [routerLink]="['/registration']"
                        >
                            Регистрация
                        </button>
                        <button
                            mat-raised-button
                            color="accent"
                            (click)="login()"
                        >
                            Вход
                        </button>
                    </div>
                </div>
            </mat-card>
        </div>
    `,
    styles: [
        `
            .page {
                display: grid;
                justify-items: center;
                align-items: center;
                height: 100%;
                background: url('./../../../../assets/images/background.jpg');
                background-size: cover;
            }

            .page::before {
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                background-color: #000;
                opacity: 0.5;
            }

            .block {
                width: 360px;
            }

            .grid {
                display: grid;
                grid-gap: 1.6rem;
            }

            .header {
                text-align: center;
            }

            .actions {
                justify-self: end;
            }
        `,
    ],
})
export class LoginContainerComponent {
    public parameters: LoginParameters = {
        login: '',
        password: '',
    };

    constructor(
        private readonly router: Router,
        private readonly authService: AuthorizationService
    ) {}

    public handleChange(parameters: LoginParameters) {
        this.parameters = parameters;
    }

    public login() {
        if (
            this.parameters.login.trim().length > 0 &&
            this.parameters.password.length > 0
        ) {
            this.authService.login(this.parameters);
        }
    }
}
