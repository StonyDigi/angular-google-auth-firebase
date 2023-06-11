import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Trip } from './trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  //vagy trips: Trip[] = [];
  trips: Array<Trip> = new Array<Trip>();

  constructor(private db: AngularFireDatabase) { 
    db.list<Trip>('trips').valueChanges().subscribe(t => {
      this.trips = t;
    });
   }
   //az adatbázison keresztül a trips-nevű listában ami majd meg fog jelenni, belerakjuk a t objektumot
   create(t: Trip) {
    this.db.list('trips').push(t);
   }
}