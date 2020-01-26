import {Component, OnInit} from '@angular/core';
import {UserService} from '../core/services/user.service';
import {User} from '../core/interface/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users: Array<User>;

  constructor(private service: UserService) {}

  ngOnInit() {
  }

  showUsers = () => {
    this.users = service.getUsers();
  }

}
