import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

// import { AppComponent } from './app.component';
import { HeroComponent } from "../hero/hero.component";
import { DetailComponent } from "../detail/detail.component";
import { MessageComponent } from "./message/message.component";
import { AppRoutingModule } from "./app-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";

import InMemoryDataService from "./in-memory-data.service";

@NgModule({
  declarations: [
    HeroComponent,
    DetailComponent,
    MessageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule
  ],
  providers: [],
  bootstrap: [HeroComponent]
})
export class AppModule {}
