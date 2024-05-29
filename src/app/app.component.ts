import { Component } from '@angular/core';
// import { HeaderComponent } from './header/header.component';
import { DUMMY_USERS } from './dummy-users';
@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user = DUMMY_USERS;
  selectUserId?: string;

  get selectedUser() {
    return this.user.find((user) => user.id === this.selectUserId);
  }

  onSelectUser(id: string) {
    this.selectUserId = id;
  }
}
