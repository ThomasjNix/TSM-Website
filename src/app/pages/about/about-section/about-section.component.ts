import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit {
  @Input() name = '';
  description = '';
  imageUrl = '';
  constructor() { }

  ngOnInit() {
    this.setDetails(this.name);
  }
  
  setDetails(name: string): void {
    /**
    * TODO: Implement API service call for these details
    */
    switch (name.toLowerCase()) {
      case 'denee weathers':
        this.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laboriosam commodi similique repudiandae ab nesciunt quasi aspernatur suscipit ipsum assumenda quisquam impedit expedita consequatur, rerum, exercitationem in voluptatem ipsa quam.';
        this.imageUrl = 'https://via.placeholder.com/150x150';
        break;
      default: 
        this.description = '';
        this.imageUrl = '';
    }
  }
  
  allDetailsAvailable(): boolean {
    return this.name && this.description && this.imageUrl;
  }

}
