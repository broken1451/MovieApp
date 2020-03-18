import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  public peliculaId: any;

  constructor(private activateRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((parametrosURL) => {
      this.getPeliId(parametrosURL['peliculaId']);
      // console.log(parametrosURL);
    });
  }



  getPeliId(id) {
    this.movieService.getPeliculaId(id).subscribe((peliculaId) => { 
      this.peliculaId = peliculaId;
      // console.log(peliculaId);
      // console.log(this.peliculaId);
    });
  }

}
