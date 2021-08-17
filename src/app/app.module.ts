import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon'

import { ScrollTopDirective } from './directives/scroll-top.directive';
import { ScrollBottomDirective } from './directives/scroll-bottom.directive';
import { StartComponent } from './pages/start/start.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { SchoolComponent } from './pages/school/school.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { SocialComponent } from './pages/social/social.component';
import { RatingComponent } from './pages/skills/rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    AboutMeComponent,
    SchoolComponent,
    JobsComponent,
    SkillsComponent,
    SocialComponent,
    ScrollBottomDirective,
    ScrollTopDirective,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
