import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {CommentModel} from '../../../models/CommentModel';
import {CommentService} from './comment.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentResolverService implements Resolve<CommentModel[]> {

  constructor(private commentService: CommentService) {
  }

  resolve(): Observable<CommentModel[]> | Promise<CommentModel[]> | CommentModel[] {
    return this.commentService.getComments();
  }
}
