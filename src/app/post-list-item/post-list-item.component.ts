
import { Component, OnInit, Input } from '@angular/core';
//importer la class post
import { PostModel } from '../models/post.model';
import { post } from 'selenium-webdriver/http';
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../services/post.service";



@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  // creer une dépendance de propriéte  post de type post
  @Input() post:PostModel;

  constructor(private router: Router, private postService: PostService) { }

  ngOnInit() {
  }

  onfindPostById(id: number){
     this.router.navigate(["/posts", id]);
  }

  onRemovePost(id: number){
    this.postService.removePost(id);
  }



  onAddLoveIts(post: PostModel){
    post.loveIts ++;
    this.postService.editPost(post);
  }

  onRemoveLoveIts(post: PostModel){
    post.loveIts --;
    this.postService.editPost(post);
  }

}
