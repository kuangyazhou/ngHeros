import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import Hero from "../hero/hero";
import HEROS from "../hero/mockHeros";

import { MessageService } from "./message.service";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  // getHeroes(): Hero[] {
  //   return HEROS;
  // }
  getHeroes(): Observable<Hero[]> {
    this.messageService.add("HeroService: fetched heroes");
    return of(HEROS);
  }
}
