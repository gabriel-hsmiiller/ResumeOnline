import { Location } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { fadeInLeftAnimation, fadeInRightAnimation } from 'src/app/animations/fade-in.animation';
import { fadeOutLeftAnimation, fadeOutRightAnimation } from 'src/app/animations/fade-out.animation';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
  animations: [
    fadeInLeftAnimation,
    fadeInRightAnimation,
    fadeOutLeftAnimation,
    fadeOutRightAnimation,
  ]
})
export class SocialComponent implements OnInit{

  show = false;
  scrollingTop = false;

  constructor(private _router: Router) {     
    if(_router.url === '/social'){
      this.show = true;
    }
  }

  ngOnInit(): void {
  }
  
  callbackScrollTop($event: boolean){
    if($event && this.show){
      this.show = false;
      this.scrollingTop = $event;
      setTimeout(() => this._router.navigateByUrl('skills'), 500);
    }
  }

}
