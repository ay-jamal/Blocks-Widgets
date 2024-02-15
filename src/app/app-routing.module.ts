import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'blocks',
        pathMatch: 'full'
      },
      {
        path: 'blocks',
        loadComponent: () => import('./Blocks/blocks.component').then(m => m.BlocksComponent)
      },
      {
        path: 'true-or-false',
        loadComponent: () => import('./true-or-false/true-or-false.component').then(m => m.TrueOrFalseComponent)
      },
      {
        path: 'match',
        loadComponent: () => import('./Match/match.component').then(m => m.MatchComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
