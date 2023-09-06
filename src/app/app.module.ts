import { AuthService } from './service/auth.service';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MembersComponent } from './components/members/members.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { KeysPipe } from './pipes/Key.pipe';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';






@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainNavComponent,
    MembersComponent,
    TaskManagerComponent,
    TaskListComponent,
    KeysPipe,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp({
    projectId: 'horda-a5c2f',
    appId: '1:341308517586:web:88d5e7d183b7d49ed0910b',
    databaseURL: 'https://horda-a5c2f-default-rtdb.firebaseio.com',
    storageBucket: 'horda-a5c2f.appspot.com',
    apiKey: 'AIzaSyBSuUkWHbTkusWRgZNO94kwLAenIDpucG4',
    authDomain: 'horda-a5c2f.firebaseapp.com',
    messagingSenderId: '341308517586',
    measurementId: 'G-G7EQ5Z1DR5',
    }),

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
