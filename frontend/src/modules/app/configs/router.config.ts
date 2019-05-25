import { Routes } from '@angular/router';
import { RegistrationContainerComponent } from '../../authorization/containers/registration-container/registration-container.component';
import { LoginContainerComponent } from '../../authorization/containers/login-container/login-container.component';
import { EventPageComponent } from '../components/event-page/event-page.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { HomeComponent } from '../components/home/home.component';

const homeRoutes: Routes = [
    { path: 'event', component: EventPageComponent },
    { path: '**', component: HomeComponent },
];

export const routes: Routes = [
    { path: 'home', component: LayoutComponent, children: homeRoutes },
    { path: 'login', component: LoginContainerComponent },
    { path: 'registration', component: RegistrationContainerComponent },
    { path: 'event', component: EventPageComponent },
    { path: '**', component: LayoutComponent },
];
