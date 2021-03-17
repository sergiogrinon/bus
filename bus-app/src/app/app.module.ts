import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { WelcomeComponent } from './components/unique/welcome/welcome.component';
import { ContactComponent } from './components/unique/contact/contact.component';


import { Routes, RouterModule } from '@angular/router'; // CLI imports router

//la mejor idea es que la ruta sea una constante de la "clase"
const routes: Routes = [
  {path: 'contact', component:ContactComponent },
  {path: 'welcome', component:WelcomeComponent },
  {path: '', redirectTo:'/home' }


]; // sets up routes constant where you define your routes
//de manera que aqui es donde tengo que decir como y cuales van a ser las rutas


/*
const rutas:Routes = [
  //array de rutas.
  {

    path: 'contact',
    Component : ContactComponent
  }
]
*/
@NgModule({
  declarations: [

    //declaracion de todos los componentes que existe en mi app.
    AppComponent,
    FooterComponent,
    WelcomeComponent,
    ContactComponent
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
