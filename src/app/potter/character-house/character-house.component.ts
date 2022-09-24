import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PotterService } from '../services/potter.service';

@Component({
  selector: 'app-character-house',
  templateUrl: './character-house.component.html',
  styleUrls: ['./character-house.component.css']
})
export class CharacterHouseComponent implements OnInit {

  public house :string[] = ["slytherin", "gryffindor", "ravenclaw", "hufflepuff"];

  selected:string = 'Select House';

  constructor(private potterService: PotterService, private router: Router) {}

  ngOnInit(): void {
    
  }

  get resultados() {
    if (this.router.url === '/characters') {      
      return this.potterService.resultados3;
    } else {
      return; 
    }
  }

  
  searchHouse(event:string){
    this.potterService.searchCharacters(event);
    console.log(event);
  }
  

  getYear(fecha: number) {  
    // TODO: Calcular edad tomando 'dateOfBirth'    
    const year = 2022; 
    return year - fecha == year ? 'No' : year - fecha;
  }

}
