import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProjectsComponent } from './projects/projects.component';
import { DonatingComponent } from './donating/donating.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { OurStoryComponent } from './about/our-story/our-story.component';
import { MissionVisionComponent } from './about/mission-vision/mission-vision.component';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { FinancesComponent } from './about/finances/finances.component';
import { TeamComponent } from './about/team/team.component';
import { EthicsAndCultureComponent } from './about/ethics-and-culture/ethics-and-culture.component';
import { PastProjectsComponent } from './projects/past-projects/past-projects.component';
import { CurrentProjectsComponent } from './projects/current-projects/current-projects.component';
import { FutureImplimentationsComponent } from './projects/future-implimentations/future-implimentations.component';

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
    FooterComponent,
    FinancesComponent,
    TeamComponent,
    EthicsAndCultureComponent,
    PastProjectsComponent,
    CurrentProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
