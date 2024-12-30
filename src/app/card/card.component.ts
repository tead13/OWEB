import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Driver } from '../driver';
import { EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{

  @Input()
  motov:Driver | undefined;

  @Input()
  indx: Number | undefined;

  cuci = new EventEmitter<Driver>();

  onDrvView(){
    //console.log("eve kliknav bace");
    //this.cuci.emit(this.motov)
    
    let link: string | undefined; // --> TS

    //var link = ''; //--> JS

    if (this.motov?.iconUrl)
    {link = this.motov?.iconUrl}
    else
    {
      link = "https://www.google.com"
    };

    window.open(link, "_blank")
  }

  klasi(){
    return {'begin':this.motov?.category=='ASD', 
      
      'adv':this.motov?.category=='EXPERT', 
      
      'undr':true}
  }

  klasi2(){
    if (this.motov?.category=='ASD') {return 'begin'}
    else {return 'adv'}
  }

  stilovi(){
    return 'underline'
  }

  ngOnInit(): void {
    
  }

}

/* card.component.ts
import { Component } from '@angular/core';

// Define an interface for your driver data
interface Driver {
  name: string;
  points: number;
  image: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // Add the drivers array
  drivers: Driver[] = [
    {
      name: 'First Driver',
      points: 210,
      image: 'assets/driver1.jpg'  // Make sure you have images in your assets folder
    },
    {
      name: 'Second Driver',
      points: 310,
      image: 'assets/driver2.jpg'
    },
    // Add more drivers as needed
  ];

  // Add the viewDriver method
  viewDriver(driver: Driver): void {
    console.log('Viewing driver:', driver.name);
    // Add your logic here for what should happen when clicking the button
  }
}*/
