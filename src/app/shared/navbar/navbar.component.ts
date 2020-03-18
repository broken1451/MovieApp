import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public peliculaEnviada;
  @Output() peliculaBuscada = new EventEmitter<any>();
  @ViewChild('txtBuscar') txtBuscar: ElementRef;
  public termino: string;

  constructor(private movieService: MovieService,  private router: Router) { }

  ngOnInit(): void {

  }


  buscar(texto: string) {

    if (texto === '' || texto.length === 0) {
      return;
    }

    // this.movieService.searchPeliculaId(texto).subscribe((peliculaBus: any) => {
    //   console.log(peliculaBus.results);
    //   this.peliculaBuscada.emit(peliculaBus.results);
    //   this.peliculaEnviada = peliculaBus.results;
    //   console.log('this.peliculaEnviada ', this.peliculaEnviada);
    // })

    this.router.navigate(['/search', texto]);
    this.txtBuscar.nativeElement.innerText = '';
    this.termino = '';
  }

}
