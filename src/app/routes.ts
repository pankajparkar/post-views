import { Routes } from "@angular/router";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserListComponent } from "./user-list/user-list.component";

export const routes: Routes = [
    { path: 'user/list', component: UserListComponent, },
    { path: 'user/edit/:id', component: UserEditComponent, },
];