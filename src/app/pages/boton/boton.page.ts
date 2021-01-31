import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.page.html',
  styleUrls: ['./boton.page.scss'],
})
export class BotonPage implements OnInit {

  favorito: boolean = false;

  constructor() { }

  ngOnInit() {
  }


  onClick(){
    this.favorito = !this.favorito;
  }
}
