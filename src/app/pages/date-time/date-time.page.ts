import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
  
  customYearValues = [2025, 2022, 2019, 1997]
  customPickerOptions = {
    buttons: [
      {
        text: 'Hola',
        handler: ( event ) => {
          console.log(event);
          
        }
      },
      {
        text: 'Mundo',
        handler: () => {
          console.log('Log!');
          
        }
      },
    ]
  }

  fNac: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  cambioFecha( event ){
    console.log(event);
    console.log(new Date( event.detail.value ));
  }
}
