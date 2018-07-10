import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

// import { AppComponent } from './app.component';
import { HeroComponent } from "../hero/hero.component";
import { DetailComponent } from "../detail/detail.component";
import { MessageComponent } from './message/message.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [HeroComponent, DetailComponent, MessageComponent, DashboardComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [HeroComponent]
})
export class AppModule {}
