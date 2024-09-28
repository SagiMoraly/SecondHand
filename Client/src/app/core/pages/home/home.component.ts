import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { register as registerSwiper } from 'swiper/element';
import { adObjList } from './adObjs';
import { homeAdObj } from '../../interfaces/homeAdObj';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  adObjList: homeAdObj[] = adObjList;
  ngOnInit(): void {
    registerSwiper();
  }
}
