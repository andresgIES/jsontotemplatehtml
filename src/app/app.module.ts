import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { JsonToComponent } from "./components/loterias-hoy/loterias-hoy";
import { HttpClientModule } from "@angular/common/http";
import { LoteriasSemanalesComponent } from './components/loterias-semanales/loterias-semanales.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, JsonToComponent, LoteriasSemanalesComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
