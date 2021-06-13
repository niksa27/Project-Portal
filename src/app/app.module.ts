import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectItemComponent } from './projects/project-list/project-item/project-item.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookEditComponent } from './book-list/book-edit/book-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { BookShoppingListService } from './book-list/bookshopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { ProjectStartComponent } from './projects/project-start/project-start.component';
import { ProjectEditComponent } from './projects/project-edit/project-edit.component';
import { ProjectService } from './projects/project.service';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { UpcomingproComponent } from './upcomingpro/upcomingpro.component';
import { UpdetailsComponent } from './upcomingpro/updetails/updetails.component';
import { UpeditComponent } from './upcomingpro/upedit/upedit.component';
import { UplistComponent } from './upcomingpro/uplist/uplist.component';
import { UpstartComponent } from './upcomingpro/upstart/upstart.component';
import { UpitemComponent } from './upcomingpro/uplist/upitem/upitem.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    ProjectItemComponent,
    BookListComponent,
    BookEditComponent,
    DropdownDirective,
    ProjectStartComponent,
    ProjectEditComponent,
    AboutusComponent,
    LoginComponent,
    RegisterComponent,
    UpcomingproComponent,
    UpdetailsComponent,
    UpeditComponent,
    UplistComponent,
    UpstartComponent,
    UpitemComponent,
    ChatComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [BookShoppingListService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
