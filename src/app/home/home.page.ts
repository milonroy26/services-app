import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ]
})
export class HomePage implements OnInit {
  store_types: any[] = [];


  constructor() { }

  ngOnInit() {
    this.store_types = [
      { id: 1, name: 'Restaurant', icon: 'shop2.jpg' },
      { id: 2, name: 'Grocery', icon: 'grocery.jpg' },
      { id: 3, name: 'Medicines', icon: 'med2.jpg' },
      { id: 4, name: 'Paan Shop', icon: 'paan.jpg' },
      { id: 5, name: 'Meat & Fish', icon: 'meat.jpg' },
      { id: 6, name: 'Gifts', icon: 'gifts.jpg' },
      { id: 7, name: 'Pet Supplies', icon: 'pet_asset.jpg' }
    ];
  }

}
