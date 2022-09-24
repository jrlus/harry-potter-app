import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PotterService {

  public resultados: [] = [];
  public resultados2: [] = [];
  public resultados3: [] = [];  

  constructor( private http: HttpClient) { 
    this.getStaff();
    this.getStudents();
    //this.searchCharacters('Slytherin');
  }

  getStaff(){
    this.http.get('https://hp-api.herokuapp.com/api/characters/staff').subscribe( (resp:any) => {      
      this.resultados = resp;
    });
  }

  getStudents(){
    this.http.get('https://hp-api.herokuapp.com/api/characters/students').subscribe( (resp:any) => {      
      this.resultados2 = resp;
    });
  }

  searchCharacters(house:string){
    this.http.get(`https://hp-api.herokuapp.com/api/characters/house/${house}`).subscribe( (resp:any) => {      
      this.resultados3 = resp;
    });
  }
  
}
