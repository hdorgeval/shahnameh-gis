/*
this class gets a GeoJSON-file via an HTTP-request from the server identified by the given URI.
*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
import GeoJSON from 'ol/format/GeoJSON';

@Injectable()

export class GeojsonService {

  geojsonUrl = 'data/places.json';
  geojson = GeoJSON;

  constructor(private http: HttpClient) { }

  getGeojson() {
    return this.http.get(this.geojsonUrl);
  }

  // getGeojson1() {
  //   return this.http.get<GeoJSON>(this.geojsonUrl)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

  // getGeojson2() {
  //   this.http.get(this.geojsonUrl).subscribe((geojson: any) => {
  //       console.log(geojson);
  //       this.geojson = geojson;
  //     });
  //     return this.geojson;
  // }


  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   // return an observable with a user-facing error message
  //   return throwError(
  //     'Something bad happened; please try again later.');
  // };

}
