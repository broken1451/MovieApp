import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public texto: string;
  public conteo: any = 9;
  public pelicula: any;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private movieService: MovieService) { }


  ngOnInit(): void {

    this.activatedRoute.params.subscribe((parametrosUrl: any) => {
      if (parametrosUrl['termino']) {
        this.texto = parametrosUrl['termino'];
        this.buscarPelicula();
      }
    });
  }







  buscarPelicula() {

    if (this.texto === '' || this.texto.length === 0) {
      return;
    }
    this.movieService.searchPeliculaId(this.texto).subscribe((peliculaEncontrada: any) => {
      this.pelicula = peliculaEncontrada.results.slice(0, this.conteo);
      // console.log(peliculaEncontrada.results);
      // console.log('this.pelicula ', this.pelicula);
    });

  }




}
