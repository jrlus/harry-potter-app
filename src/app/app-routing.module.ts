import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterHouseComponent } from './potter/character-house/character-house.component';
import { CharactersComponent } from './potter/characters/characters.component';
import { StaffComponent } from './potter/staff/staff.component';
import { StudentsComponent } from './potter/students/students.component';

const routes: Routes = [
  { path: '',  component: StaffComponent, pathMatch: 'full' },
  { path: 'staff',  component: StaffComponent },  
  { path: 'characters',  component: CharactersComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'character/:house', component: CharacterHouseComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
