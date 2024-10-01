//sempre acrescentar cada novo componente aqui

import { Component } from '@angular/core';

import { HeaderComponent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users'; //importanto os usuários do arquivo dummy-users.ts
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app';
  users = DUMMY_USERS; //propriedade do componente para que se possa obter acesso aos dados 
  selectedUserId?: string; //propriedade para armazenar o id do usuário selecionado

  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId)!; //retornando o usuário selecionado com base no id
  }

  onSelectUser(id: string){
    this.selectedUserId = id;
  }
}
