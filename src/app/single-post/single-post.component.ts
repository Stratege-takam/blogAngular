import { Component, OnInit } from '@angular/core';
import {PostModel} from "../models/post.model";
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  post: PostModel;
  constructor(private route: ActivatedRoute,
              private  postService: PostService,
              private  router: Router) { }

  ngOnInit() {
    this.post = new PostModel('', '',0,new Date());
    const  id = this.route.snapshot.params['id'];
    this.postService.findPostById(+id).then(
      (mypost: PostModel) => {
        this.post = mypost;
      }
    );
  }

  onBack() {
    this.router.navigate(["/posts"]);
  }

}
