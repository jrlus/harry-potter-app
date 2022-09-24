import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff/staff.component';
import { CharactersComponent } from './characters/characters.component';
import { StudentsComponent } from './students/students.component';
import { ResultsComponent } from './results/results.component';
import { CharacterHouseComponent } from './character-house/character-house.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StaffComponent,
    CharactersComponent,
    StudentsComponent,
    ResultsComponent,
    CharacterHouseComponent
  ],
  exports: [
    StaffComponent,
    CharactersComponent,
    StudentsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class PotterModule { }
