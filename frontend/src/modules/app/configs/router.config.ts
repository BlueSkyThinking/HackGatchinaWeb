import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { RegistrationContainerComponent } from '../../authorization/containers/registration-container/registration-container.component';
import { LoginContainerComponent } from '../../authorization/containers/login-container/login-container.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginContainerComponent },
    { path: 'registration', component: RegistrationContainerComponent },
    { path: '**', component: HomeComponent },
];
