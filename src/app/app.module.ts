import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

// import { AppComponent } from './app.component';
import { HeroComponent } from "../hero/hero.component";
import { DetailComponent } from "../detail/detail.component";

@NgModule({
  declarations: [HeroComponent, DetailComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [HeroComponent]
})
export class AppModule {}
