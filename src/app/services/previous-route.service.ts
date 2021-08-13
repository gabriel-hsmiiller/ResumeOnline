import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreviousRouteService {
  private previousRouteSubject$: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  public previousRoute$: Observable<string> = this.previousRouteSubject$.asObservable();

  constructor() { }

  public setPreviousRoute(prev: string){
    this.previousRouteSubject$.next(prev);
  }
}
