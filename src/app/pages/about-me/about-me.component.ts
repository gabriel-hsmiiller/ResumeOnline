import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PreviousRouteService } from 'src/app/services/previous-route.service';
import { fadeInLeftAnimation, fadeInRightAnimation } from '../../animations/fade-in.animation'
import { fadeOutLeftAnimation, fadeOutRightAnimation } from '../../animations/fade-out.animation'
import { slideInLeftAnimation,slideInRightAnimation } from '../../animations/slide-in.animation'
import { slideOutLeftAnimation,slideOutRightAnimation } from '../../animations/slide-out.animation'

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
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
export class AboutMeComponent implements OnInit {

  show = false;
  scrollingTop = false;
  scrollingBottom = false;
  prevUrl: string = null;

  constructor(private _router: Router, previousRouteService: PreviousRouteService) {
    if(_router.url === '/about-me'){
      this.show = true;
    }
    previousRouteService.previousRoute$.subscribe(route => this.prevUrl = route);
  }

  ngOnInit(): void {}

  callbackScrollBottom($event: boolean){
    if($event && this.show){
      this.show = false;
      this.scrollingBottom = $event;
      setTimeout(() => this._router.navigateByUrl('school'), 500)
    }
  }
  
  callbackScrollTop($event: boolean){
    if($event && this.show){
      this.show = false;
      this.scrollingTop = $event;
      setTimeout(() => this._router.navigateByUrl(''), 500)
    }
  }

}
