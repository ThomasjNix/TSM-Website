import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingInfoService {
  urlPathObs: Observable<string>;
  constructor(private router: Router) { 
    this.urlPathObs = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map((event: NavigationEnd) => event.urlAfterRedirects.substr(1, event.urlAfterRedirects.length))
    );
  }
}
