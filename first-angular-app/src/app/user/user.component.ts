import { Component, computed, Input, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // ImagePath = computed(()=>'assets/users/'+this.selectedUser().avatar);
  get ImagePath(){
    return 'assets/users/'+this.avatar;
  }
  @Input() avatar!:string;
  @Input() name!:string;
  onSelectUser(){
    // const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
