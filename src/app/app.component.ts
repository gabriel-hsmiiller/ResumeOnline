import { Component } from '@angular/core';
import { PreviousRouteService } from './services/previous-route.service'
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
  private prevRoute: string = null;
  private currRoute: string = null;

  constructor(router: Router, previousRoute: PreviousRouteService){
    router.events.pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.prevRoute = this.currRoute;
        this.currRoute = event.url;
        previousRoute.setPreviousRoute(this.prevRoute);
      });
  }
}
