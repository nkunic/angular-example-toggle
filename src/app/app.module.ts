import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToggleModule } from './toggle/toggle.module';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, MaterialModule, ToggleModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
