import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { fadeInAnimation, fadeInLeftAnimation, fadeInRightAnimation } from 'src/app/animations/fade-in.animation';
import { fadeOutAnimation, fadeOutLeftAnimation, fadeOutRightAnimation } from 'src/app/animations/fade-out.animation';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
  animations: [
    fadeInLeftAnimation,
    fadeInRightAnimation,
    fadeInAnimation,
    fadeOutAnimation,
    fadeOutLeftAnimation,
    fadeOutRightAnimation,
  ]
})
export class SocialComponent implements OnInit{

  link = 'https://github.com/gabriel-hsmiiller/ResumeOnline'
  linkedin = 'https://www.linkedin.com/in/gabriel-henrique-da-silva-miiller-a3b922178/'
  github = 'https://github.com/gabriel-hsmiiller/'

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
  
  toStart(){
    if(this.show){
      this.show = false;
      this.scrollingTop = true;
      setTimeout(() => this._router.navigateByUrl(''), 500);
    }
  }

}
