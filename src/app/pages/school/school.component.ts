import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { fadeInLeftAnimation, fadeInRightAnimation } from 'src/app/animations/fade-in.animation';
import { fadeOutLeftAnimation, fadeOutRightAnimation } from 'src/app/animations/fade-out.animation';
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
  ]
})
export class SchoolComponent implements OnInit {

  show = false;
  scrollingTop = false;
  scrollingBottom = false;
  prevUrl: string = null;

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
