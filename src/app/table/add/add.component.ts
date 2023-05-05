import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Car } from 'src/app/models/Car';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  newCar:Car={
    id:0,
    brand:'',
    model:'',
    colour:'',
    engineType:'',
    manufactureYear:0
  };

  constructor(private carService:TableService){}

  addNewCar(){
    if(this.newCar!=undefined)
      this.carService.addCar(this.newCar);
  }
}
