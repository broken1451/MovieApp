import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  public peliculaRecibida: any;

  reciebiendoPelicula(event){
     this.peliculaRecibida = event;
     console.log(' this.data = event; ', event );
     console.log(' peliculaRecibida; ', this.peliculaRecibida );
  }
}
