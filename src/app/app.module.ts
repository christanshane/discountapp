import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { enableProdMode } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './../environments/firebase.config';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DiscountsComponent } from './components/discounts/discounts.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DiscountComponent } from './components/discount/discount.component';
import { AddDiscountComponent } from './components/add-discount/add-discount.component';
import { EditDiscountComponent } from './components/edit-discount/edit-discount.component';

const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'discounts',component:DiscountsComponent}
]

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
