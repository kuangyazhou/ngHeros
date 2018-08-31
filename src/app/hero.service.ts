import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
// import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

import Hero from "../hero/hero";
import HEROS from "../hero/mockHeros";

import { MessageService } from "./message.service";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor(
    // private http: HttpClient,
    private messageService: MessageService
  ) {}

  private heroesUrl = "api/heroes"; // URL to web api
  // getHeroes(): Hero[] {
  //   return HEROS;
  // }
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  getHeroes(): Observable<Hero[]> {
    this.messageService.add("HeroService: fetched heroes");
    return of(HEROS);
    // return this.http.get<Hero[]>(this.heroesUrl).pipe(
    //   catchError(this.handleError('getHeroes',[]))
    // );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (term.trim()) {
      return of([]);
    }

    // return this.http.get<Hero[]>(`api/heroes/?name=${term}`).pipe(
    //   tap(_ => console.log(`found heroes matching "${term}"`)),
    //   catchError(this.handleError<Hero[]>("searchHeroes", []))
    // );
  }
}
