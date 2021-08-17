import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { fadeInLeftAnimation, fadeInRightAnimation } from 'src/app/animations/fade-in.animation';
import { fadeOutLeftAnimation, fadeOutRightAnimation } from 'src/app/animations/fade-out.animation';
import { slideInLeftAnimation,slideInRightAnimation } from '../../animations/slide-in.animation'
import { slideOutLeftAnimation,slideOutRightAnimation } from '../../animations/slide-out.animation'
import { PreviousRouteService } from 'src/app/services/previous-route.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
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
export class JobsComponent implements OnInit {

  jobs = [ 
    { position: 'Intern', from: '2019', to: '2020', company: 'Online Applications' },
    { position: 'Front-end Developer JR', from: '2020', to: '2021', company: 'Out Off The Box' },
    { position: 'Front-end Developer PL', from: '2021', to: 'Present', company: 'Hausz Brasil' },
  ]

  show = false;
  scrollingTop = false;
  scrollingBottom = false;
  prevUrl: string = null;

  constructor(private _router: Router, previousRouteService: PreviousRouteService) { 
    if(_router.url === '/jobs'){
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
      setTimeout(() => this._router.navigateByUrl('skills'), 500)
    }
  }
  
  callbackScrollTop($event: boolean){
    if($event && this.show){
      this.show = false;
      this.scrollingTop = $event;
      setTimeout(() => this._router.navigateByUrl('school'), 500)
    }
  }

}
