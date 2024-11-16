import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RotaFilhaAComponent } from './rota-filha-a.component';
import { RotaFilhaBComponent } from './rota-filha-b.component';

const routes: Routes = [
  { path: 'a', component: RotaFilhaAComponent },
  { path: 'b', component: RotaFilhaBComponent }
];

@NgModule({
  declarations: [
    RotaFilhaAComponent,
    RotaFilhaBComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class RotasFilhasModule { }
