import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { fadeInLeftAnimation, fadeInRightAnimation } from 'src/app/animations/fade-in.animation';
import { fadeOutLeftAnimation, fadeOutRightAnimation } from 'src/app/animations/fade-out.animation';
import { slideInLeftAnimation,slideInRightAnimation } from '../../animations/slide-in.animation'
import { slideOutLeftAnimation,slideOutRightAnimation } from '../../animations/slide-out.animation'
import { PreviousRouteService } from 'src/app/services/previous-route.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss'],
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
export class SchoolComponent implements OnInit {

  show = false;
  scrollingTop = false;
  scrollingBottom = false;
  prevUrl: string = null;

  graduations = [
    { name: 'IT technical', from: '2016', to: '2018', local: 'Etec Polivalente', level: 'Middle School' },
    { name: 'System Analysis and Development', from: '2019', to: '2021', local: 'Fatec Campinas', level: 'Graduation' },
  ];

  constructor(private _router: Router, previousRouteService: PreviousRouteService) { 
    if(_router.url === '/school'){
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
      setTimeout(() => this._router.navigateByUrl('jobs'), 500)
    }
  }
  
  callbackScrollTop($event: boolean){
    if($event && this.show){
      this.show = false;
      this.scrollingTop = $event;
      setTimeout(() => this._router.navigateByUrl('about-me'), 500)
    }
  }

}
