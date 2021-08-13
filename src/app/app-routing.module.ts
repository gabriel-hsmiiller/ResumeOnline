import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { SchoolComponent } from './pages/school/school.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { SocialComponent } from './pages/social/social.component';
import { StartComponent } from './pages/start/start.component';


const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'school', component: SchoolComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'social', component: SocialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
