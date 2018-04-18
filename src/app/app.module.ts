// angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// routing import
import { AppRoutingModule } from './app-routing.module';

// custom services
import { CalendarEventsListService } from './services/calendar-events-list.service';

// custom component imports
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsBarComponent } from './components/news-bar/news-bar.component';
import { ShowsBarComponent } from './components/shows-bar/shows-bar.component';
import { VideosBarComponent } from './components/videos-bar/videos-bar.component';
import { HomeComponent } from './views/home/home.component';
import { BleepyThingsComponent } from './views/bleepy-things/bleepy-things.component';
import { NewsComponent } from './views/news/news.component';
import { VideosComponent } from './views/videos/videos.component';
import { PhotosComponent } from './views/photos/photos.component';
import { MusicComponent } from './views/music/music.component';
import { ContactComponent } from './views/contact/contact.component';
import { TicketsComponent } from './views/tickets/tickets.component';
import { AboutComponent } from './views/about/about.component';

import { Angular2ImageGalleryModule } from '../../node_modules/angular2-image-gallery/angular2imagegallery.module';

@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    NewsBarComponent,
    ShowsBarComponent,
    VideosBarComponent,
    HomeComponent,
    BleepyThingsComponent,
    NewsComponent,
    VideosComponent,
    PhotosComponent,
    MusicComponent,
    ContactComponent,
    TicketsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,  // Must be after BrowserModule!!
    Angular2ImageGalleryModule
  ],
  providers: [
    CalendarEventsListService
  ],
  bootstrap: [
    BleepyThingsComponent
  ]
})
export class AppModule { }
