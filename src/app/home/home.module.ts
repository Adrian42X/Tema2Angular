import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TableComponent } from '../table/table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import {MatDialogModule} from '@angular/material/dialog';
import { AddComponent } from '../table/add/add.component';
import { UpdateComponent } from '../table/update/update.component';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
@NgModule({
  declarations: [HomeComponent,TableComponent, AddComponent,UpdateComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzTableModule,
    MatDialogModule,
    FormsModule,
    NzIconModule
  ]
})
export class HomeModule { }
