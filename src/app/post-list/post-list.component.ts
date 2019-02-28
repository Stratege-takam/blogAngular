import { Component, OnInit, Input } from '@angular/core';
// importer la class post
import { Post } from '../model/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  // initialisation du  tableau des posts 
  posts =[
     new Post("Mon premier post", 
     "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Eaque veritatis adipisci, non tempore alias rerum, perferendis ",
     0,new Date()),
     new Post("Mon deuxième post", 
     "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Eaque veritatis adipisci, non tempore alias rerum, perferendis ",
     0,new Date()),
     new Post("Mon troisième post", 
     "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Eaque veritatis adipisci, non tempore alias rerum, perferendis ",
     0,new Date()),
     new Post("Mon quatrième post", 
     "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Eaque veritatis adipisci, non tempore alias rerum, perferendis ",
     0,new Date()),
     new Post("Mon cinquième post", 
     "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Eaque veritatis adipisci, non tempore alias rerum, perferendis ",
     0,new Date()),
     new Post("Encore un post", 
     "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Eaque veritatis adipisci, non tempore alias rerum, perferendis ",
     0,new Date())
  ];

  constructor() { }

  ngOnInit() {
  }

  
}

