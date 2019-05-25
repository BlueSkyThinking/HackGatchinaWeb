import { Component } from '@angular/core';
import { LoginParameters } from '../../types/LoginParameters';

@Component({
    selector: 'app-registration-container',
    template: `
        <div class="page">
            <mat-card class="block">
                <div class="grid">
                    <div class="header">Регистрация</div>
                    <app-login-content
                        [parameters]="parameters"
                        (onchange)="handleChange($event)"
                    ></app-login-content>
                    <div class="actions">
                        <button
                            mat-button
                            color="accent"
                            [routerLink]="['/login']"
                        >
                            Назад
                        </button>
                        <button mat-raised-button color="accent">
                            Регистрация
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
export class RegistrationContainerComponent {
    public parameters: LoginParameters = {
        login: '',
        password: '',
    };

    public handleChange(parameters: LoginParameters) {
        this.parameters = parameters;

        console.log(this.parameters);
    }
}
