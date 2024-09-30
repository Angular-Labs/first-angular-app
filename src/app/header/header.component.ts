//Para converter em componente
import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    standalone: true, //reconhece este componente como um componente autônomo e o Angular conhec eoutros tipos de componentes.
    templateUrl: './header.component.html',
    /*
    estilo inline
    styles: [
        'h1 { font-weight: normal; }'
    ]
    
    */
    styleUrl: './header.component.css'
})
//O nome do da classe descreve o que fará o componente
export class HeaderComponent {}