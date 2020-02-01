import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RoutingInfoService } from '../../routing-info.service';

@Component({
  selector: 'app-common-page',
  templateUrl: './common-page.component.html',
  styleUrls: ['./common-page.component.scss']
})
export class CommonPageComponent implements OnInit {
  header = '';
  constructor(private router: Router, private routingInfoService: RoutingInfoService) { }

  ngOnInit() {
    this.routingInfoService.urlPathObs.subscribe((urlSegment) => {
      this.header = this.getHeaderMapping(urlSegment).toUpperCase();
    });
  }
  
  getHeaderMapping(urlPath: string) {
    console.log(urlPath);
    switch (urlPath.toLowerCase()) {
      case 'about':
        return 'about us';
      case 'media':
        return 'our media';
      case 'booking':
        return 'booking / contact us';
      case 'upcoming-shows':
        return 'our upcoming shows';
      default:
        return '';
    } 
  }
}
