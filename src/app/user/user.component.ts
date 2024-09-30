/* -------------------------------   SEM SIGNAL   ---------------------------------- */

import { Component, EventEmitter, Input, Output} from '@angular/core';
//Input = decorador
//input = função
/*output = função, é apenas uma função normal que pode ser chamada dentro do componente, 
mas não está conectada diretamente ao fluxo de comunicação entre componentes.*/
/*Output = decorador, é sempre associado a um objeto do tipo EventEmitter, 
que é responsável por emitir eventos que podem ser capturados pelo componente pai.*/

//type User = { com o type você pode definir outros tipos de objetos
//  id: string;
//  avatar: string;
//  name: string;
//}

interface User { //com a interface é possível definir um tipo de objeto
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  
  //aceitando inputs no componente
  @Input({required: true}) user!: User;
//outro exemplo de implementação:
  //@Input({required: true}) id!: string; //a exclamação descarta a possibilidade de um valor indefinido
  //@Input({ required: true }) avatar!: string //aqui a exclamação vem indicando que não tem valor atribuído, require para dizer que é obrigatório definir a propriedade
  //@Input({ required: true }) name!: string
  @Output() select = new EventEmitter();//deixar o valor genérico para que não ocorra erros de tipagem
  //select = output<string>(); //a saída não cria um evento signal igual a entrada

  
  get imagePath() { 
    return 'assets/users/' + this.user.avatar;
  }  //SEM SIGNAL

  onSelectedUser() {
    this.select.emit(this.user.id);
    
  }
}


/* --------------------------------------   COM SIGNAL    ------------------------------------------ */
/*
import { Component, signal, input, computed } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  
  avatar = input.required<string>(); // Signal para avatar, atribuindo um valor inicial, sintaxe do typescript
  name = input.required<string>(); // Signal para name

  selectedUser = signal(DUMMY_USERS[0]); // Inicializando com o primeiro usuário do array DUMMY_USERS

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  }); // Computed deve ser usada com signal

  onSelectedUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]); // Atualizando o signal com um usuário aleatório do array DUMMY_USERS
  }
}
*/



/*

                                  -------------------USANDO INPUT AQUI---------------------
@Input({ required: true }) avatar!: string //A exclamação aqui é um recurso do typescript qye informa que sabemos que 
o valor não é nulo, embora o typescript não possa ver nesse código, mas sabemos que o valor será definido de fora

---------------------------------------------------------------------------------------------------------------------------------

O required: true é um recurso do angular que informa que o valor é obrigatório, ou seja, 
se não for passado um valor para o avatar e name retornará um erro

                                      ------------------- SIGNAL ---------------------

      O signal é usado para que ele possa notificar o angular sempre que valores forem alterados fazendo que o 
      angular possa atualizar as partes em que esses valores são usados. Ele é mais eficiente. Ele atualiza a interface do 
      usuário de forma mais refinada sem precisar verificar todos os eventos possíveis que possam ocorrer em qualquer lugar. 
      Talvez não seja possivel de uso em uma empresa que usa o amngular mais antigo, ele é um recurso do Angular 16 

Com signal o código seria assim:

avatar = input<string>();//função capaz de trabalhar com uma ampla variedade de tipos, essa sintaxe também pode ser vista em typescript
avatar = input('');
avatar = input.required<string>()//não se pode passar valor inicial
nome = input.required<string>()//lembrando que nome e avatar são signals
no app.component.html continua a mesma sintaxe

imagePath = computed(() => {
  return 'assets/users/' + this.avatar()
})  //mais eficiente

export class UserComponent {
  selectedUser = signal( DUMMY_USERS[randomIndex]) //aqui é selecionado um usuário do array DUMMY_USERS
  computed deve ser usada com signal
  imagePath = computed (() => 'assets/users/' + this.selectedUser().avatar) //aqui é feito a concatenação do caminho da imagem com o nome da imagem do usuário selecionado
  

  onSelectedUser() {
  const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  this.selectedUser.set(DUMMY_USERS[randomIndex]) //com o signal
  this.selectedUser = DUMMY_USERS[randomIndex] //codigo sem o signal
  }
}

---------------------------------------------------------------------------------------------------------------------------------

import { DUMMY_USERS } from '../dummy-users';

Aqui faço com que seja recebido um user aleatorio do arraylist DUMMY_USERS.
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);



---------------------------------------------------------------------------------------------------------------------------------
sintaxe do typescript
input<T>() inputSignal<T>(); //o T é substituido por um valor
*/