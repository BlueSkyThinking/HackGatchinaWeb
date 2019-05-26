import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginContentComponent} from './components/login-content/login-content.component';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {LoginContainerComponent} from './containers/login-container/login-container.component';
import {RegistrationContainerComponent} from './containers/registration-container/registration-container.component';
import {BasicComponentsModule} from '../basic-components/basic-components.module';
import {RouterModule} from '@angular/router';
import {AuthorizationService} from "./service/authorization.service";
import { RegisterContentComponent } from './components/register-content/register-content.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        LoginContentComponent,
        LoginContainerComponent,
        RegistrationContainerComponent,
        RegisterContentComponent,
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        BasicComponentsModule,
        RouterModule,
        SharedModule,
    ],
    providers: [
        AuthorizationService
    ],
    exports: [LoginContainerComponent, RegistrationContainerComponent],
})
export class AuthorizationModule {}
