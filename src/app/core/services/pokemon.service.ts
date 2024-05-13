import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { PokemonResults } from '../../interfaces/pokemon';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }


  getPokemonList(): Observable<PokemonResults> {
    return this.http.get<PokemonResults>( `${environment.apiUrlBase}pokemon?limit=10&offset=0`);
  }
}
