import { Component, OnInit } from "@angular/core";
import Hero from "../hero/hero";
import HEROS from "../hero/mockHeros";
import { HeroService } from "../app/hero.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  constructor(private heroService: HeroService) {}
  // hero: Hero = {
  //   id: 1,
  //   name: "Windstorm"
  // };
  // heroes = HEROS;
  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }
  ngOnInit() {
    // console.log(HEROS);
    this.getHeroes();
  }
}
