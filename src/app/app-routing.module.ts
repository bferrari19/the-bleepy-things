import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { NewsComponent } from './views/news/news.component';
import { VideosComponent } from './views/videos/videos.component';
import { PhotosComponent } from './views/photos/photos.component';
import { MusicComponent } from './views/music/music.component';
import { ContactComponent } from './views/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'music', component: MusicComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
