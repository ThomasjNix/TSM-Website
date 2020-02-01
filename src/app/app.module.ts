import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './pages/about/about.component';
import { MediaComponent } from './pages/media/media.component';
import { BookingComponent } from './pages/booking/booking.component';
import { UpcomingShowsComponent } from './pages/upcoming-shows/upcoming-shows.component';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonPageComponent } from './pages/common-page/common-page.component';
import { AboutSectionComponent } from './pages/about/about-section/about-section.component';

const routes = [
    {path: '', redirectTo: '/about', pathMatch: 'full'},
    {path: 'about', component: AboutComponent},
    {path: 'media', component: MediaComponent},
    {path: 'booking', component: BookingComponent},
    {path: 'upcoming-shows', component: UpcomingShowsComponent},
    {path: '**', component: AboutComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutComponent,
    MediaComponent,
    BookingComponent,
    UpcomingShowsComponent,
    CommonPageComponent,
    AboutSectionComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
