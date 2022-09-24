import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PotterService } from '../services/potter.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  get resultados() {
    if (this.router.url === '/staff' || this.router.url === '/') {
      return this.potterService.resultados;
    }
    else if (this.router.url === '/students') {
      return this.potterService.resultados2;
    } else {
      return;
    } 
  }

  constructor(private potterService: PotterService, private router: Router) {}

  ngOnInit(): void {
  }

  getYear(fecha: number) {  
    // TODO: Calcular edad tomando 'dateOfBirth'    
    const year = 2022; 
    return year - fecha == year ? 'No' : year - fecha;
  }

}
