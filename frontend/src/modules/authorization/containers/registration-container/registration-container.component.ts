import { Component } from '@angular/core';
import { AuthorizationService } from '../../service/authorization.service';
import { RegisterParameters } from '../../types/RegisterParameters';

@Component({
    selector: 'app-registration-container',
    template: `
        <video
            autoplay="autoplay"
            muted="muted"
            loop="loop"
            id="myVideo"
            #myVideo
        >
            <source src="../../../../assets/video/back.mp4" type="video/mp4" />
        </video>

        <div class="page">
            <mat-card class="block">
                <div class="grid">
                    <div class="header">Регистрация</div>
                    <app-register-content
                        [parameters]="parameters"
                        (onchange)="handleChange($event)"
                    ></app-register-content>
                    <div class="actions">
                        <button
                            mat-button
                            color="accent"
                            [routerLink]="['/login']"
                        >
                            Назад
                        </button>
                        <button
                            mat-raised-button
                            color="accent"
                            (click)="register()"
                        >
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

            #myVideo {
                position: fixed;
                right: 0;
                bottom: 0;
                min-width: 100%;
                min-height: 100%;
            }
        `,
    ],
})
export class RegistrationContainerComponent {
    public parameters: RegisterParameters = {
        login: '',
        password: '',
        firstName: '',
        lastName: '',
    };

    constructor(public readonly authService: AuthorizationService) {}

    public handleChange(parameters: RegisterParameters) {
        this.parameters = parameters;
    }

    public register() {
        this.authService.register(this.parameters);
    }
}
