import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { NewsComponent } from './views/news/news.component';
import { VideosComponent } from './views/videos/videos.component';
import { PhotosComponent } from './views/photos/photos.component';
import { MusicComponent } from './views/music/music.component';
import { ContactComponent } from './views/contact/contact.component';
import { TicketsComponent } from './views/tickets/tickets.component';
import { AboutComponent } from './views/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'music', component: MusicComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})

export class AppRoutingModule {}
