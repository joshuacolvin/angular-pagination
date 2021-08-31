import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { PaginationModule } from "./pagination/pagination.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PaginationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
