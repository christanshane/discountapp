import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { enableProdMode } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirebaseService } from './services/firebase.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DiscountsComponent } from './components/discounts/discounts.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DiscountComponent } from './components/discount/discount.component';
import { AddDiscountComponent } from './components/add-discount/add-discount.component';
import { EditDiscountComponent } from './components/edit-discount/edit-discount.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'discounts',component:DiscountsComponent},
  {path: 'add-discount',component:AddDiscountComponent},
  {path: 'login',component:LoginComponent}
]

export const firebaseConfiguration = {
    apiKey: "AIzaSyBSNSbaUW7xzy1rTRY7jTOU7zLZ369VhbI",
    authDomain: "kazzhing-9f1d1.firebaseapp.com",
    databaseURL: "https://kazzhing-9f1d1.firebaseio.com",
    storageBucket: "kazzhing-9f1d1.appspot.com"
};


enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DiscountsComponent,
    NavbarComponent,
    DiscountComponent,
    AddDiscountComponent,
    EditDiscountComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfiguration),
    AngularFireDatabaseModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
