import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../models/UserModel';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  // styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: UserModel;

  constructor() { }

  ngOnInit(): void {
  }

}
