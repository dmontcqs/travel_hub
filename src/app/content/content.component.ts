import { Component, OnInit } from '@angular/core';

// aquí cla app y la vista (html y css)sss
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],

})

// aquí metés las funciones o la lógica del componente

export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  otrosDestinos: string[] = ["Cobá", "Chiapas", "Durango", "jalisco", "Monterrey"];
  condition: boolean = true; 
  hayLista: boolean = true; 
  fecha:string = '10/09/2022';
  price = 2499.99; 
  
}

