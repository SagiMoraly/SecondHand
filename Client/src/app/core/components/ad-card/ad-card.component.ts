import { Component, Input, OnInit } from '@angular/core';
import { homeAdObj } from '../../interfaces/homeAdObj';

@Component({
  selector: 'app-ad-card',
  templateUrl: './ad-card.component.html',
  styleUrl: './ad-card.component.scss',
})
export class AdCardComponent implements OnInit {
  @Input() homeAdObj!: homeAdObj;

  ngOnInit(): void {}
}
