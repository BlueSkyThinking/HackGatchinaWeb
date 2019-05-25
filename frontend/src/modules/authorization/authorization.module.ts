import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginContentComponent} from './components/login-content/login-content.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {LoginContainerComponent} from './containers/login-container/login-container.component';
import {RegistrationContainerComponent} from './containers/registration-container/registration-container.component';
import {BasicComponentsModule} from '../basic-components/basic-components.module';
import {RouterModule} from '@angular/router';
import {AuthorizationService} from "./service/authorization.service";

@NgModule({
    declarations: [
        LoginContentComponent,
        RegistrationComponent,
        LoginContainerComponent,
        RegistrationContainerComponent,
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        BasicComponentsModule,
        RouterModule,
    ],
    providers: [
        AuthorizationService
    ],
    exports: [LoginContainerComponent, RegistrationContainerComponent],
})
export class AuthorizationModule {}
