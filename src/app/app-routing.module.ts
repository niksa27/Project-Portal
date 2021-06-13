// File useed for routing

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import the components required for the routing
import { ProjectsComponent } from './projects/projects.component';
import { BookListComponent } from './book-list/book-list.component';
import { ProjectStartComponent } from './projects/project-start/project-start.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectEditComponent } from './projects/project-edit/project-edit.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
//import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import {UpcomingproComponent} from './upcomingpro/upcomingpro.component';
import {UpeditComponent} from './upcomingpro/upedit/upedit.component';
import {UpdetailsComponent} from './upcomingpro/updetails/updetails.component';
import { ChatComponent } from './chat/chat.component';

/*
const routes: Routes = [
  { path: '', component: LoginComponent , pathMatch: 'full' },
//  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},//, canActivate: [AuthenGuard] },
 //, canActivate: [AuthGuard] },
];
*/
 //, canActivate: [AuthGuard] },
// Routes array for routing
const appRoutes: Routes = [
//  { path: '', redirectTo: '/aboutus', pathMatch: 'full' },      // root wild card
   { path: '', component: LoginComponent , pathMatch: 'full' },
   { path: 'register', component: RegisterComponent},
   { path: 'login', component: LoginComponent},//, canActivate: [AuthenGuard] },
   {path: 'dis',component:ChatComponent},
   //{path: 'dis',component:LoginComponent},

    { path: 'projects', component: ProjectsComponent, children: [
  // { path: '', component: ProjectStartComponent }, // Wildcard routing
   
    { path: 'new', component: ProjectEditComponent },
    { path: ':id', component: ProjectDetailComponent },
    { path: ':id/edit', component: ProjectEditComponent },
  ] },

  { path: 'upcomingpro', component:UpcomingproComponent , children: [
    // { path: '', component: ProjectStartComponent }, // Wildcard routing
     
      { path: 'new1', component: UpeditComponent },
      { path: ':id', component: UpdetailsComponent },
      { path: ':id/edit', component: UpeditComponent },
    ] },

   { path: 'book-list', component: BookListComponent },

  { path: 'aboutus', component: AboutusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule 
{

}
