import { Routes } from '@angular/router';
import { LoginPage } from './features/login-page/login-page';
import { MainPage } from './features/main-page/main-page';

export const routes: Routes = [
    { path: "", component: MainPage},
    { path: "login", component: LoginPage}
];
