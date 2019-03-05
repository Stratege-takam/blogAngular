import { Injectable } from '@angular/core';
import {PostModel} from "../models/post.model";
import {Subject} from "rxjs/index";
import {post} from "selenium-webdriver/http";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postSubject = new Subject<PostModel[]>();

  private url  = "https://http-client-demon.firebaseio.com/post.json";
  private posts: PostModel[] =[];

  private initPost = [
    new PostModel("Mon premier post",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Eaque veritatis adipisci, non tempore alias rerum, perferendis ",
      0,new Date(),1),
    new PostModel("Mon deuxième post",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Eaque veritatis adipisci, non tempore alias rerum, perferendis ",
      0,new Date(),2),
    new PostModel("Mon troisième post",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Eaque veritatis adipisci, non tempore alias rerum, perferendis ",
      0,new Date(),3),
    new PostModel("Mon quatrième post",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Eaque veritatis adipisci, non tempore alias rerum, perferendis ",
      0,new Date(),4),
    new PostModel("Mon cinquième post",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Eaque veritatis adipisci, non tempore alias rerum, perferendis ",
      0,new Date(),5),
    new PostModel("Encore un post",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Eaque veritatis adipisci, non tempore alias rerum, perferendis ",
      0,new Date(),6)
  ];

  emitPost() {
    this.postSubject.next(this.posts.slice());
  }



  constructor(private httpClient: HttpClient) {
    this.findAllPost();
  }

  findPostById(id: number) {
    return new Promise(
      (resolve, reject) => {
        const post = this.posts.find(
          (postObject) => {
            return  postObject.id === id
          }
        );

        if (post)
        {
          resolve(post);
        }
        else
        {
          reject();
        }
      }
    );

  }

  removePost(id: number) {
    const index = this.posts.findIndex(
      (postObject) => {
        return  postObject.id === id
      }
    );

    this.posts.splice(index,1);

    this.httpClient.put(this.url,this.posts).subscribe(
      () => {
        console.log("enregistrement effectué avec succès !");
      },
      (error) => {
        console.log("Erreur d'enregistrement  ", error);
      }
    );

    this.emitPost();
  }

  findAllPost() {
    this.httpClient.get<PostModel[]>(this.url).subscribe(
      (Listposts) => {
        //console.log(Listposts);
        this.posts = Listposts ;
        if (!this.posts || this.posts.length ==0) this.posts = this.initPost;
        this.emitPost();
      },
      (error) => {
        console.log("Erreur de chargement  ", error);
      }
    );
  }

  createPost(post: PostModel= null){
    if (post != null) {
      post.id = this.posts.length == 0 ? 1 : this.posts[this.posts.length - 1].id + 1;
      this.posts.push(post);
      this.emitPost();
    }

    this.httpClient.put(this.url,this.posts).subscribe(
      () => {
        console.log("enregistrement effectué avec succès !");
      },
      (error) => {
        if (!this.posts || this.posts.length ==0){
          this.posts = this.initPost;
          this.emitPost();
        }
        console.log("Erreur d'enregistrement  ", error);
      }
    );
  }

  editPost(post: PostModel= null){

    if (post !=null) {
      const index = this.posts.findIndex(
        (postObject) => {
          return  postObject.id === post.id
        }
      );
      this.posts[index] = post;
    }

    this.httpClient.put(this.url,this.posts).subscribe(
      () => {
        console.log("enregistrement effectué avec succès !");
      },
      (error) => {
        console.log("Erreur d'enregistrement  ", error);
      }
    );
    this.emitPost();
  }
}
