import { NgModule } from "@angular/core";
// import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

// import { HeroComponent } from "../hero/hero.component";
import { DetailComponent } from "../detail/detail.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
const routes: Routes = [
  {
    path: "heroes",
    // component: HeroComponent
    component: DetailComponent
  },
  { path: "dashboard", component: DashboardComponent },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" }
];

@NgModule({
  // imports: [CommonModule]
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
