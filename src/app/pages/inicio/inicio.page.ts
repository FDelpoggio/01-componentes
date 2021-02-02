import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'car-sport-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-off-outline',
      name: 'Boton',
      redirectTo: '/boton'
    },
    {
      icon: 'card-outline',
      name: 'Card',
      redirectTo: '/card'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Check',
      redirectTo: '/check'
    },
    {
      icon: 'calendar-outline',
      name: 'Date',
      redirectTo: '/date-time'
    },
    {
      icon: 'add-outline',
      name: 'Fab', //boton flotante
      redirectTo: '/fab'
    },
    {
      icon: 'grid-outline',
      name: 'Grid', 
      redirectTo: '/grid'
    },
    {
      icon: 'reload-outline',
      name: 'Infinite scroll', 
      redirectTo: '/infinite-scroll'
    },
    {
      icon: 'hammer-outline',
      name: 'Input', 
      redirectTo: '/input'
    },
    {
      icon: 'list-outline',
      name: 'List', 
      redirectTo: '/list'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
