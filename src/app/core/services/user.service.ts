import { Injectable } from '@angular/core';
import {usersData} from '../mocks/dataUsers';
import {User} from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  public getUsers(): Array<User> {
    return usersData;
  }
}
