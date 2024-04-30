import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './paises/login/components/login/login.component';

const routes: Routes = [{
  path: '',
  children:[
    {
      path: 'login',
      loadChildren: ()=>import('./paises/login/login.module').then(l=>l.LoginModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
