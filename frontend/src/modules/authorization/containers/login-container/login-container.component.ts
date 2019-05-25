import { Component } from '@angular/core';
import { LoginParameters } from '../../types/LoginParameters';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-container',
    template: `
        <div class="page">
            <mat-card class="block">
                <div class="grid">
                    <div class="header">Вход</div>
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

    constructor(private readonly router: Router) {}

    public handleChange(parameters: LoginParameters) {
        this.parameters = parameters;

        console.log(this.parameters);
    }

    public login() {
        this.router.navigate(['./home']);
    }
}
