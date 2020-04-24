import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../../../models/UserModel';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  // styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: UserModel;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  navigate(user: UserModel) {
    this.router.navigate([user.id, 'posts'], {relativeTo: this.activatedRoute});
  }
}
