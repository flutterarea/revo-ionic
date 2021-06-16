import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as Config from '../../config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class WpProvider {

  constructor(public http: Http) {

  }

  getRecentPosts(page:number = 1){
    return this.http.get(
      Config.WORDPRESS_REST_API_URL
      + 'posts?page=' + page)
    .map(res => res.json());
  }

  getComments(postId:number, page:number = 1){
    return this.http.get(
      Config.WORDPRESS_REST_API_URL
      + "comments?post=" + postId
      + '&page=' + page)
    .map(res => res.json());
  }

  getAuthor(author){
    return this.http.get(Config.WORDPRESS_REST_API_URL + "users/" + author)
    .map(res => res.json());
  }

  getPostCategories(post){
    let observableBatch = [];

    post.categories.forEach(category => {
      observableBatch.push(this.getCategory(category));
    });

    return Observable.forkJoin(observableBatch);
  }

  getCategory(category){
    return this.http.get(Config.WORDPRESS_REST_API_URL + "categories/" + category)
    .map(res => res.json());
  }

  getMedia(id){
    return this.http.get(Config.WORDPRESS_REST_API_URL + "media/" + id)
    .map(res => res.json());
  }


}
