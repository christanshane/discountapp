import { Component } from '@angular/core';
import { AngularFireDatabase , FirebaseListObservable, AngularFireDatabaseModule } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  discounts : FirebaseListObservable<any[]>;
  constructor(private af: AngularFireDatabase){
    this.discounts = af.list('/discounts');
  }
}
