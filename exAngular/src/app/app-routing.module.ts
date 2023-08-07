import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponentComponent } from './form-component/form-component.component';
import { CharacteristicsInputComponentComponent } from './characteristics-input-component/characteristics-input-component.component';

const routes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  { path: 'form', component: FormComponentComponent },
  {
    path: 'characteristics',
    component: CharacteristicsInputComponentComponent,
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
