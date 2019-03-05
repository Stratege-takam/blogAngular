import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PostService} from "../services/post.service";
import {PostModel} from "../models/post.model";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private postService: PostService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSubmitForm() {

    const formValue = this.postForm.value;
    const newPost = new PostModel(
      formValue.title,
      formValue.content,
      0,
      new Date(),
    );
    console.log(newPost);
    this.postService.createPost(newPost);
    this.router.navigate(['/posts']);
  }

}
