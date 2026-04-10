import { Routes } from '@angular/router';
import { LoginPage } from './features/login-page/login-page';
import { MainPage } from './features/main-page/main-page';
import { Pixel } from './features/main-page/pixel/pixel';
import { SubscribePage } from './features/subscribe-page/subscribe-page';

export const routes: Routes = [
    { path: "", component: MainPage, children: [
        { path: "", component: Pixel }
    ]},
    { path: "login", component: LoginPage},
    { path: "subs", component: SubscribePage}
];
