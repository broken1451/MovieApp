import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'img'
})
export class ImgPipe implements PipeTransform {

  transform(img: any, poster?: any) {
    let url = 'http://image.tmdb.org/t/p/w300';

    // console.log('img pipe ', img );
    // console.log('url en img  pipe ', url );
    // console.log('img.backdrop_path ', img.backdrop_path );

    // if (poster) {
    //   return url + img.poster_path;
    // }



    if (img.backdrop_path) {
        return url + img.backdrop_path;
    } else {
       if (img.poster_path) {
         return url + img.poster_path;
       } else {
         return 'assets/img/notfound.png';
       }
    }

 
  }

}
