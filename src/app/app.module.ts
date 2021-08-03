import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './template/nav/nav.component';
import { FooterComponent } from './template/footer/footer.component';
import { FormCreateComponent } from './form/form-create/form-create.component';
import { HomeComponent } from './form/home/home.component';
import { ListInitComponent } from './form/home/list-init.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormUpdateComponent } from './form/form-update/form-update.component';
//import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Update1Component } from './form/update1/update1.component';
//import { FormDebbugComponent } from './form/form-debbug/form-debbug.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    ListInitComponent,
    FormCreateComponent,
    FormUpdateComponent,
    Update1Component,
    //FormDebbugComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   // FormGroup,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
