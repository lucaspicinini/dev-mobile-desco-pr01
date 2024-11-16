import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RotasFilhasModule } from './rotas-filhas/rotas-filhas.module';

const routes: Routes = [
  { path: 'rotas-filhas', loadChildren: () => import('./rotas-filhas/rotas-filhas.module').then(m => m.RotasFilhasModule) }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RotasFilhasModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
