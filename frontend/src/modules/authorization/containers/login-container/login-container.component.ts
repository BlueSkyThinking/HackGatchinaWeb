import { AfterViewInit, Component } from '@angular/core';
import { LoginParameters } from '../../types/LoginParameters';
import { Router } from '@angular/router';
import { AuthorizationService } from '../../service/authorization.service';

@Component({
    selector: 'app-login-container',
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
                    <div class="header">
                        <div class="icon-container">
                            <app-logo></app-logo>
                        </div>
                    </div>
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
            #myVideo {
                position: fixed;
                right: 0;
                bottom: 0;
                min-width: 100%;
                min-height: 100%;
            }

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
                margin: 0 auto;
            }

            .actions {
                justify-self: end;
            }

            .icon-container {
                width: 8rem;
                height: 8rem;
            }
        `,
    ],
})
export class LoginContainerComponent implements AfterViewInit {
    public parameters: LoginParameters = {
        login: '',
        password: '',
    };

    constructor(
        private readonly router: Router,
        private readonly authService: AuthorizationService
    ) {}

    ngAfterViewInit(): void {
        setTimeout(() => {
            (document.getElementById('myVideo') as any).muted = true;
        });
    }

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
