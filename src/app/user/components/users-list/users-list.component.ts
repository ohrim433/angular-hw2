import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserModel} from '../../../../models/UserModel';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  // styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: UserModel[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.users = this.activatedRoute.snapshot.data.allUsers as UserModel[];
  }

  ngOnInit(): void {
  }

}
