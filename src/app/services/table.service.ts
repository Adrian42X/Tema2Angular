import { Injectable } from '@angular/core';
import { Car } from '../models/Car';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  cars:Car[]=[{
    id:1,
    brand:"Opel",
    model:"Zafira",
    colour:"black",
    engineType:"1.6 petrol",
    manufactureYear:2016
  },
  {
    id:2,
    brand:"Ford",
    model:"Focus",
    colour:"gray",
    engineType:"1.6 turbo petrol",
    manufactureYear:2015
  },
  {
    id:3,
    brand:"BMW",
    model:"5 Series",
    colour:"white",
    engineType:"2.5 diesel",
    manufactureYear:2018
  },
  {
    id:4,
    brand:"Renault",
    model:"MeganeST",
    colour:"yellow",
    engineType:"2.0 turbo petrol",
    manufactureYear:2017
  }
];
  index:number=5;
  constructor() { }

  getAllCars():Car[]{
    return this.cars;
  }

  updateCar(car:Car){
    let carToUpdate=this.cars.find(x=>x.id==car.id);
    carToUpdate=car;
  }

  addCar(car:Car){
    car.id=this.index++;
    this.cars.push(car);
  }
}
