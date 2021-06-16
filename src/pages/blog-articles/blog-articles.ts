import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BlogSingleArticlePage } from '../blog-single-article/blog-single-article';
import { WpProvider } from '../../providers/wp/wp';
import { UtilsProvider } from '../../providers/utils/utils';

@IonicPage()
@Component({
  selector: 'page-blog-articles',
  templateUrl: 'blog-articles.html',
})
export class BlogArticlesPage {

  posts: Array<any> = new Array<any>();
  morePagesAvailable: boolean = true;
  categoryTitle: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public wp: WpProvider, private utils: UtilsProvider) {
    this.utils.loadShow('Loading articles');
  }

  ionViewDidLoad() {
      this.wp.getRecentPosts()
      .subscribe(data => {
        for(let post of data){
          post.excerpt.rendered = post.excerpt.rendered.split('<a')[0] + "</p>";
          this.wp.getMedia(post.featured_media)
          .subscribe(m => {
            this.wp.getAuthor(post.author)
            .subscribe(a => {
              this.posts.push({
                post: post,
                img: m.source_url,
                author: a.name
              });
              this.utils.loadHide();
            })
          })
        }
      });
  }

  openSingleArticle(post) {
    this.navCtrl.push(BlogSingleArticlePage, {
      post: post
    })
  }

  doInfinite(infiniteScroll) {
    let page = (Math.ceil(this.posts.length/10)) + 1;
    let loading = true;

    this.wp.getRecentPosts(page)
    .subscribe(data => {
      for(let post of data){
        if(!loading){
          infiniteScroll.complete();
        }

        post.excerpt.rendered = post.excerpt.rendered.split('<a')[0] + "</p>";
        this.wp.getMedia(post.featured_media)
        .subscribe(m => {
          this.wp.getAuthor(post.author)
          .subscribe(a => {
            this.posts.push({
              post: post,
              img: m.source_url,
              author: a.name
            });
          })
        })

        loading = false;
      }
    }, err => {
      this.morePagesAvailable = false;
    })
  }

}
