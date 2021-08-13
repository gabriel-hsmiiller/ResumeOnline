import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { fadeInLeftAnimation, fadeInRightAnimation } from 'src/app/animations/fade-in.animation';
import { fadeOutLeftAnimation, fadeOutRightAnimation } from 'src/app/animations/fade-out.animation';
import { PreviousRouteService } from 'src/app/services/previous-route.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  animations: [
    fadeInLeftAnimation,
    fadeInRightAnimation,
    fadeOutLeftAnimation,
    fadeOutRightAnimation,
  ]
})
export class StartComponent implements OnInit {

  show = false;
  scrollingBottom = false;

  constructor(private _router: Router) { 
    if(_router.url === '/'){
      this.show = true;
    }
  }

  ngOnInit(): void {}  
  
  callbackScrollBottom($event: boolean){
    if($event && this.show){
      this.show = false;
      this.scrollingBottom = $event;
      setTimeout(() => this._router.navigateByUrl('about-me'), 500)
    }
  }
}
