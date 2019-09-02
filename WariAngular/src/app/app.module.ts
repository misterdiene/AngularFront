import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { AuthService } from './auth.service';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http'; // pensez à l'impoter ici
import { UserService } from './user.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { CompteComponent } from './compte/compte.component';
import { DepotComponent } from './depot/depot.component';
import { TransactionComponent } from './transaction/transaction.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ListerService } from './lister.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    PartenaireComponent,
    CompteComponent,
    DepotComponent,
    TransactionComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [AuthService, AuthGuard, UserService, ListerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// ajouter ceci sinon vou ne pourer pas vous connecter au server de symfony
// et vous verez le token
