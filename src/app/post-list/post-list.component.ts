import {Component, OnInit, Input, OnDestroy} from '@angular/core';
// importer la class post
import { PostModel } from '../models/post.model';
import {PostService} from "../services/post.service";
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  // initialisation du  tableau des posts
  posts = [];

  postSubscription = new Subscription();

  constructor(private postService: PostService) { }


  ngOnInit() {
    this.postSubscription = this.postService.postSubject.subscribe(
      (listPosts: PostModel[]) => {
        this.posts = listPosts;
      }
    );
    this.postService.emitPost();
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }


}

