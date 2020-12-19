import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MissionVisionComponent } from './mission-vision/mission-vision.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProjectsComponent } from './projects/projects.component';
import { FutureImplimentationsComponent } from './future-implimentations/future-implimentations.component';
import { DonatingComponent } from './donating/donating.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    MissionVisionComponent,
    OurStoryComponent,
    GalleryComponent,
    ProjectsComponent,
    FutureImplimentationsComponent,
    DonatingComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
