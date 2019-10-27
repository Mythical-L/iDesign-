import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutpageComponent } from './components/aboutpage/aboutpage.component';
import { ServicespageComponent } from './components/servicespage/servicespage.component';
import { PagenotfoundComponent } from './components/pagenotfound.component';
import { ContactpageComponent } from './components/contactpage/contactpage.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomepageComponent},
  {path:'about', component: AboutpageComponent},
  {path:'services', component: ServicespageComponent},
  {path:'contact', component: ContactpageComponent},
  {path:'**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
