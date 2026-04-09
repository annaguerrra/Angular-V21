import { Routes } from '@angular/router';
import { LoginPage } from './features/login-page/login-page';
import { MainPage } from './features/main-page/main-page';
import { Pixel } from './features/main-page/pixel/pixel';

export const routes: Routes = [
    { path: "", component: MainPage, children: [
        { path: "", component: Pixel }
    ]},
    { path: "login", component: LoginPage}
];
