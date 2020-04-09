import { Component, OnInit } from '@angular/core';
import {CommentModel} from '../../models/CommentModel';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  // styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {
  comments: CommentModel[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.comments = this.activatedRoute.snapshot.data.allComments;
  }

  ngOnInit(): void {
  }

}
