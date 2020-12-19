import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { DonatingComponent } from './donating/donating.component';
import { FutureImplimentationsComponent } from './future-implimentations/future-implimentations.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { MissionVisionComponent } from './mission-vision/mission-vision.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'donating', component: DonatingComponent },
  { path: 'future-implimentations', component: FutureImplimentationsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'mission', component: MissionVisionComponent },
  { path: 'our-story', component: OurStoryComponent },
  { path: 'projects', component: ProjectsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
