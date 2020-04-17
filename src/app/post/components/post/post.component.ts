import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../../../../models/PostModel';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  // styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: PostModel;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(
      value => value.id
    );
  }

  ngOnInit(): void {
  }

}
