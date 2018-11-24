import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { JournalsComponent } from './journals/journals.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
const router: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'homepage', component: HomeComponent},
      {path:'contactpage', component: ContactComponent},
      {path:'aboutpage', component: AboutComponent},
      {path:'journalpage', component: JournalsComponent},
      {path: 'blogs/:id' , component: SingleBlogComponent}

];
@NgModule({
  imports: [ RouterModule.forRoot(router) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { 








}


