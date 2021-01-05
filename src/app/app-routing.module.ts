import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { EthicsAndCultureComponent } from './about/ethics-and-culture/ethics-and-culture.component';
import { FinancesComponent } from './about/finances/finances.component';

import { MissionVisionComponent } from './about/mission-vision/mission-vision.component';
import { OurStoryComponent } from './about/our-story/our-story.component';
import { TeamComponent } from './about/team/team.component';
import { DonatingComponent } from './donating/donating.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { CurrentProjectsComponent } from './projects/current-projects/current-projects.component';
import { FutureImplimentationsComponent } from './projects/future-implimentations/future-implimentations.component';
import { PastProjectsComponent } from './projects/past-projects/past-projects.component';


import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'donating', component: DonatingComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'about/mission', component: MissionVisionComponent },
  { path: 'about/our-story', component: OurStoryComponent },
  { path: 'about/team', component: TeamComponent },
  { path: 'about/ethics-and-culture', component: EthicsAndCultureComponent },
  { path: 'about/finances', component: FinancesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/past', component: PastProjectsComponent },
  { path: 'projects/current', component: CurrentProjectsComponent },
  { path: 'projects/future-implimentations', component: FutureImplimentationsComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
