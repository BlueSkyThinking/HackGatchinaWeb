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
