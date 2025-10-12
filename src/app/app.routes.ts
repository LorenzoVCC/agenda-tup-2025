import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { ContactListPage } from './pages/contact-list-page/contact-list-page';
import { ContactDetailsPage } from './pages/contact-details-page/contact-details-page';
import { LoggedLayout } from './layouts/logged-layout/logged-layout';
import { Register } from './pages/register/register';
import { onlyPublicGuard } from './guards/only-public-guard';
import { onlyUserGuard } from './guards/only-user-guard';
import { newContact } from "./components/new-contact-page/new-contact-page"
import { GroupsListPage } from './pages/groups-list-page/groups-list-page';
import { Spinner } from './components/spinner/spinner';

export const routes: Routes = [
    {
        path: "login",
        component: LoginPage,
        canActivate: [onlyPublicGuard]
    },

    {
        path: "register",
        component: Register,
        canActivate: [onlyPublicGuard]
    },

    {
        // Path vacío se abre cuando la página no tiene url más que localhost
        path: "",
        component: LoggedLayout,
        canActivateChild: [onlyUserGuard],
        children: [
            {
                path: "",
                component: ContactListPage
            },
            {
                path:"contacts/new",
                component: newContact
            }, 
            {
                path: "contacts/:idContacto/edit",
                component: newContact
            },
            {
                path: "groups",
                component: GroupsListPage
            },  
            {
                path: "contacts/:idContacto",
                component: ContactDetailsPage
            },  
        ]
    },
];