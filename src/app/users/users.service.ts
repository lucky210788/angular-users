import {Injectable} from '@angular/core';
import {usersData} from './mocks/dataUsers';
import {User} from './user.interface';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor() {
  }

  public getUsers(): Observable<User[]> {
    return of(usersData);
  }
}
