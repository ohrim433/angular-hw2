import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {UserModel} from '../../../models/UserModel';
import {Observable} from 'rxjs';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<UserModel[]> {

  constructor(private userService: UserService) {
  }

  resolve(): Observable<UserModel[]> | Promise<UserModel[]> | UserModel[] {
    return this.userService.getUsers();
  }
}
