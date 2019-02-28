
import { Component, OnInit, Input } from '@angular/core';
//importer la class post
import { Post } from '../model/post';
import { post } from 'selenium-webdriver/http';



@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  // creer une dépendance de propriéte  post de type post
  @Input() post:Post;

  constructor() { }

  ngOnInit() {
  }
}
