import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { CharacteristicsComponentComponent } from './characteristics-component/characteristics-component.component';
import { CharacteristicsInputComponentComponent } from './characteristics-input-component/characteristics-input-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    CharacteristicsComponentComponent,
    CharacteristicsInputComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
