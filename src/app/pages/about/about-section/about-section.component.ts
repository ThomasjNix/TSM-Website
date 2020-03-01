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
  bandRole = '';
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
        this.description = 'Denee Weathers was born and raised in Charlotte where she fell in love with music. She attended Catawba College’s Artist Development Program perfecting her craft in songwriting and performance. Around this time, she took influence from bands like Guns N’ Roses, Cold Play, My Chemical Romance, Ghost Town, Beartooth, Slipknot, Attack Attack!, Scary Kids Scaring Kids, Tyler The Creator, and Green Day.';
        this.bandRole = 'Vocalist';
        this.imageUrl = '../../../../assets/denee.jpg';
        break;
      case 'jeremiah ray':
        this.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laboriosam commodi similique repudiandae ab nesciunt quasi aspernatur suscipit ipsum assumenda quisquam impedit expedita consequatur, rerum, exercitationem in voluptatem ipsa quam.';
        this.bandRole = 'Bassist';
        this.imageUrl = '../../../../assets/jeremiah.png';
        break;
      case 'max lindstedt':
        this.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laboriosam commodi similique repudiandae ab nesciunt quasi aspernatur suscipit ipsum assumenda quisquam impedit expedita consequatur, rerum, exercitationem in voluptatem ipsa quam.';
        this.bandRole = 'Guitarist';
        this.imageUrl = '../../../../assets/max.jpg';
        break;
      case 'our story':
        this.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laboriosam commodi similique repudiandae ab nesciunt quasi aspernatur suscipit ipsum assumenda quisquam impedit expedita consequatur, rerum, exercitationem in voluptatem ipsa quam.';
        this.imageUrl = '../../../../assets/band.jpg';
        break;
      default: 
        this.description = '';
        this.imageUrl = '';
    }
  }
  
  allDetailsAvailable(): boolean {
    return this.name !== '' && this.description !== '' && this.imageUrl !== '';
  }

}
