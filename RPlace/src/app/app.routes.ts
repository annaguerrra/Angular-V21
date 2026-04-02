import { Routes } from '@angular/router';
import { LoginPage } from './features/login-page/login-page';
import { MainPage } from './features/main-page/main-page';
import { MatrizPixel } from './features/main-page/matriz-pixel/matriz-pixel';

export const routes: Routes = [
    { path: "", component: MainPage, children: [
        { path: "", component: MatrizPixel }
    ]},
    { path: "login", component: LoginPage}
];
