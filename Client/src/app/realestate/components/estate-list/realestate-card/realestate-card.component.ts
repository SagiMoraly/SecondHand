import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-realestate-card',
  templateUrl: './realestate-card.component.html',
  styleUrl: './realestate-card.component.scss'
})
export class RealestateCardComponent implements OnInit{
  @Input() realestate: any
  
  title!: string
  subTitle!: string
  flatStats!: string
  
  ngOnInit(): void {
    this.title = this.realestate.street + " " + this.realestate.streetNumber
    this.subTitle = this.realestate.city 
    this.flatStats = this.realestate.features[0] + " • " + this.realestate.features[1] + " • " + this.realestate.features[2]
  }


}
