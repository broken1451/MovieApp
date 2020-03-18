import { Component, OnInit, ElementRef, ViewChild, Input, Inject } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
{}



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('btn1', {static: false}) btn1: ElementRef;
  @ViewChild('btn2', {static: false}) btn2: ElementRef;
  @ViewChild('btn3', {static: false}) btn3: ElementRef;

  public populares: any;
  public infantiles: any;
  public teatro: any;
  public peliculaEnviadaDesdeNavbar: any;
  @Input() peliculaesGenero: any[];
  public loading: boolean;

  public conteo: any = 9;

  constructor(private movieService: MovieService, private router: Router, private activatedRoute: ActivatedRoute ) {
    this.loading = true;
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((urlParametros: any) => {
      // this.peliculaesGenero = urlParametros['urlParametros'];
      // console.log(urlParametros['categoria']);
      if (urlParametros['categoria'] == '2019') {
        this.movieService.getPelicularPorAnio(urlParametros['categoria']).subscribe((peliculaAnio: any) => {
          this.peliculaesGenero = peliculaAnio.results.slice(0, this.conteo);
          // console.log(peliculaAnio.results);
        });
        // console.log('paso por aca  if home/2019');
      } else if (urlParametros['categoria'] == '2018') {
        this.movieService.getPelicularPorAnio(urlParametros['categoria']).subscribe((peliculaAnio: any) => {
          this.peliculaesGenero = peliculaAnio.results.slice(0, this.conteo);
          // console.log(peliculaAnio.results);
        });
        // console.log('paso por aca  if home/2018');
      } else if (urlParametros['categoria'] == '2017') {
        this.movieService.getPelicularPorAnio(urlParametros['categoria']).subscribe((peliculaAnio: any) => {
          this.peliculaesGenero = peliculaAnio.results.slice(0, this.conteo);
          // console.log(peliculaAnio.results);
        });
        // console.log('paso por aca  if home/2017');
      } else if (urlParametros['categoria'] == '2016') {
        this.movieService.getPelicularPorAnio(urlParametros['categoria']).subscribe((peliculaAnio: any) => {
          this.peliculaesGenero = peliculaAnio.results.slice(0, this.conteo);
          // console.log(peliculaAnio.results);
        });
        // console.log('paso por aca  if home/2016');
      }

    });


    setTimeout(() => {

      this.movieService.getPopulares().subscribe((peliculas: any) => {
          this.populares = peliculas.results.slice(0, this.conteo);
          this.peliculaesGenero =  this.populares;
          // console.log(peliculas.results);
          this.loading = false;
      });
    }, 2000);


  }




    getPopulares(texto: string) {

      if (texto == 'Populares') {
        // this.getPopularesGeneral()
        this.movieService.getPopularesGemero(texto).subscribe((peliculasPopulares: any) => {
          // console.log(this.btn1.nativeElement.textContent);
          // console.log('peliculasPopulares ', peliculasPopulares);
          this.populares = peliculasPopulares.results.slice(0, this.conteo);
          this.peliculaesGenero = this.populares;
        });
      } else if (texto == 'Teatros') {
        // this.getPopularesTeatro();
        this.movieService.getPopularesGemero(texto).subscribe((peliculasTeatro: any) => {
          // console.log('peliculasTeatro ', peliculasTeatro);
          this.teatro = peliculasTeatro.results.slice(0, this.conteo);
          this.peliculaesGenero = this.teatro;
          // console.log(this.btn2.nativeElement.textContent);
        });
        // console.log(this.btn2.nativeElement.textContent);
      } else {
        // this.getPopularesInfantil();
        this.movieService.getPopularesGemero(texto).subscribe((peliculasNinos: any) => {
          // console.log('peliculasNinos ', peliculasNinos);
          // console.log(this.btn3.nativeElement.textContent);
          this.infantiles = peliculasNinos.results.slice(0, this.conteo);
          this.peliculaesGenero  = this.infantiles;
        });

      }
    }


    verDetallePelicula(i) {
      // console.log(i);
      this.router.navigate(['/movie', i]);
  }

}
