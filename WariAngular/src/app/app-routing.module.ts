import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { AuthGuard } from './auth.guard';
import { CompteComponent } from './compte/compte.component';
import { DepotComponent } from './depot/depot.component';
import { TransactionComponent } from './transaction/transaction.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },

  {
    path: 'login', component: LoginComponent,
  },

  {
    path: 'user', component: UserComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'partenaire', component: PartenaireComponent
  },

  {
    path: 'compte', component: CompteComponent
  },

  {
    path: 'depot', component: DepotComponent
  },

  {
    path: 'transaction', component: TransactionComponent
  },

  {
    path: 'menu', component: MenuComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
