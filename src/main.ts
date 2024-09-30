//Aqui você informa que tem um componente e que quer usar eme em algum lugar do seu código. O Angular vai reconhecer e vai renderizar o componente.

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

//chamar o método bootstrapApplication apenas uma vez
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));