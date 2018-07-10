import { Component, OnInit } from "@angular/core";
import Hero from "../hero/hero";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  constructor() {}

  hero: Hero = {
    id: 1,
    name: "Windstorm"
  };

  ngOnInit() {}
}
