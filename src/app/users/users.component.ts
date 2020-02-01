import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {User} from './user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  public users: User[];

  constructor(private service: UsersService) {
  }

  ngOnInit() {
  }

  showUsers = () => {
    this.service.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
