import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { ContactListPage } from './pages/contact-list-page/contact-list-page';
import { ContactDetailsPage } from './pages/contact-details-page/contact-details-page';
import { LoggedLayout } from './layouts/logged-layout/logged-layout';

export const routes: Routes = [
    {
        path:"login",
        component: LoginPage
    },
    {
        // Path vacío se abre cuando la página no tiene url más que localhost
        path:"",
        component: LoggedLayout,
        children: [
            {
                path:"",
                component: ContactListPage
            },
            {
                path:"contacts/:id",
                component: ContactDetailsPage
            },
        ]
    },
];
