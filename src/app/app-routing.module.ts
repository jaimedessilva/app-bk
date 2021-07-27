import { HomeComponent } from './form/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListInitComponent } from './form/home/list-init.component';

//Rotas
const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: 'home'},
{ path: '', component: HomeComponent},
{ path: 'list', component: ListInitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
