import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Car } from 'src/app/models/Car';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
    private service:TableService){}

  ngOnInit(): void {}

  editCar(){
    if(this.data){
      this.service.updateCar(this.data);
    }
  }
}
