import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutSubjects = [];
  constructor() { }

  ngOnInit() {
    this.aboutSubjects.push('Denee Weathers');
    this.aboutSubjects.push('Jeremiah Ray');
    this.aboutSubjects.push('Max Lindstedt');
  }

}
