import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
{}


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }


  // populares
 getPopulares() {
  let url = `${environment.url}/discover/movie?sort_by=popularity.desc&api_key=${environment.apiKey}`;
  return this.httpClient.get(url);

}

  // populares por genero
 getPopularesGemero(textoPopular: string) {
  let url = `${environment.url}/discover/movie`;
  //  populares
  if (textoPopular == 'Populares') {
     url += `?sort_by=popularity.desc&api_key=${environment.apiKey}`;
     return this.httpClient.get(url);
  } else if (textoPopular == 'Infantiles'){
    // infantiles
      url += `?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${environment.apiKey}`;
      return this.httpClient.get(url);
  } else if (textoPopular == 'Teatros'){
    // Teatros
    url += `?primary_release_date.gte=2019-12-01&primary_release_date.lte=2019-12-15&api_key=${environment.apiKey}`;
    return this.httpClient.get(url);
  }

}



  // get Pelucular por id
  getPeliculaId(movieid) {
    let url = `${environment.url}/movie/${movieid}?api_key=${environment.apiKey}`;
    return this.httpClient.get(url);
   }


   // Buscar una pelicula
  //  let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apiKey }
  //  https://api.themoviedb.org/3/search/movie?api_key=8ee813186f1978b4c769a17cf5c144ab&query=frozen&page=1&include_adult=true
     searchPeliculaId(texto: string) {
       let url = `${environment.url}/search/movie?api_key=${environment.apiKey}&query=${texto}`;
       return this.httpClient.get(url);
      }

  // Servicios de buscar por anio
  getPelicularPorAnio(textoAnio: string) {
    // https://api.themoviedb.org/3/discover/movie?primary_release_year=2010&sort_by=vote_average.desc
    let url  = `${environment.url}/discover/movie?primary_release_year=${textoAnio}&sort_by=vote_average.desc&api_key=${environment.apiKey}`;
    return this.httpClient.get(url);

  }
 
}
