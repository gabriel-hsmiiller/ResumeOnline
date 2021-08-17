import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { fadeInLeftAnimation, fadeInRightAnimation } from 'src/app/animations/fade-in.animation';
import { fadeOutLeftAnimation, fadeOutRightAnimation } from 'src/app/animations/fade-out.animation';
import { slideInLeftAnimation,slideInRightAnimation } from '../../animations/slide-in.animation'
import { slideOutLeftAnimation,slideOutRightAnimation } from '../../animations/slide-out.animation'
import { PreviousRouteService } from 'src/app/services/previous-route.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    fadeInLeftAnimation,
    fadeInRightAnimation,
    fadeOutLeftAnimation,
    fadeOutRightAnimation,
    slideInLeftAnimation,
    slideInRightAnimation,
    slideOutLeftAnimation,
    slideOutRightAnimation
  ]
})
export class SkillsComponent implements OnInit {

  languageSkills = [
    { name: 'Portuguese', rating: 5 },
    { name: 'English', rating: 3 },
  ]
  
  technicalSkills = [
    { name: 'HTML, CSS, JS', rating: 5 },
    { name: 'Angular', rating: 4 },
    { name: 'Node.JS', rating: 4 },
    { name: 'SASS', rating: 3 },
    { name: 'React', rating: 3 },
    { name: 'React Native', rating: 3 },
    { name: '.NET Core', rating: 3 },
    { name: 'SQL/MySQL', rating: 3 },
    { name: 'Flutter', rating: 2 },
    { name: 'NestJS', rating: 2 },
    { name: 'Git', rating: 2 },
  ]
  
  softSkills = [
    { name: 'Teaching', rating: 4 },
    { name: 'Comunication', rating: 3 },
    { name: 'Group Work', rating: 3 },
  ]

  show = false;
  scrollingTop = false;
  scrollingBottom = false;
  prevUrl: string = null;

  constructor(private _router: Router, previousRouteService: PreviousRouteService) { 
    if(_router.url === '/skills'){
      this.show = true;
    }
    previousRouteService.previousRoute$.subscribe(route => this.prevUrl = route);
  }

  ngOnInit(): void {
  }
  
  callbackScrollBottom($event: boolean){
    if($event && this.show){
      this.show = false;
      this.scrollingBottom = $event;
      setTimeout(() => this._router.navigateByUrl('social'), 500)
    }
  }
  
  callbackScrollTop($event: boolean){
    if($event && this.show){
      this.show = false;
      this.scrollingTop = $event;
      setTimeout(() => this._router.navigateByUrl('jobs'), 500)
    }
  }

}
