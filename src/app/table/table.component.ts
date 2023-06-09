import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TableService } from '../services/table.service';
import { Car } from '../models/Car';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  cars:Car[]=[];
  constructor(private carService:TableService,private dialog:MatDialog,
    private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    this.showCars();
  }

  showCars()
  {
    this.cars=this.carService.getAllCars();
    this.cdr.detectChanges();
  }

  updateCar(car:Car){
    const dialogRef=this.dialog.open(UpdateComponent,{data:car});
    this.cars=[...this.cars];
  }

  openAddDialog(){
    let dialogRef = this.dialog.open(AddComponent);
    this.showCars();
    this.cars=[...this.carService.getAllCars()]
  }

}
