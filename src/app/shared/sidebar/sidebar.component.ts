import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() peliculaBuscada = new EventEmitter<any>();
  @Output() peliculaBuscadaFecha = new EventEmitter<any>();
  @Input() pelicula;

  constructor(private router: Router, private movieService: MovieService) { }

  ngOnInit(): void {

  }

  recibiendoPelicula(event) {

    // console.log('peliculaBuscada ', this.peliculaBuscada = event );
    // console.log('this.pelicula ', this.pelicula = event );

  }

  irPorFecha(txt: string) {
    // console.log(txt);

    if ( txt == '2019'){
      this.router.navigate(['/home', txt]);
    } else if ( txt == '2018'){
      this.router.navigate(['/home', txt]);
    } else  if ( txt == '2017'){
      this.router.navigate(['/home', txt]);
    } else  if ( txt == '2016'){
      this.router.navigate(['/home', txt]);
    }

  }

}
