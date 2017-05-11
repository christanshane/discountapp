import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.css']
})
export class DiscountsComponent implements OnInit {
  discounts:any;
  constructor(private firebaseService : FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getListings().subscribe(discounts =>{
      console.log(discounts);
      this.discounts = discounts;
    });
  }

}
