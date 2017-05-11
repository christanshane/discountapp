import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {

  discounts : FirebaseListObservable<any[]>
  constructor(private af: AngularFireDatabase) { }

  getListings(){
    this.discounts = this.af.list('/discounts') as FirebaseListObservable<discounts[]>
    return this.discounts;
  }

}

interface discounts {
  $key?:string;
  company?:string;
  description?: string;
  discountvalue?: string;
  image?: string;
  path?: string;
  percentage?: boolean;
  title?:string;
}
