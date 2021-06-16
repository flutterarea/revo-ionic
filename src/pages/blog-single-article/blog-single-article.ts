import { Component, ViewChild, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { WpProvider } from '../../providers/wp/wp';

@IonicPage()
@Component({
  selector: 'page-blog-single-article',
  templateUrl: 'blog-single-article.html',
})
export class BlogSingleArticlePage {

  @ViewChild(Content)
  content: Content;
  scroll:any = 0;

  post:any;
  comments:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public wp: WpProvider, public zone: NgZone) {
    this.post = this.navParams.get('post');
  }

  ionViewDidLoad() {
    this.wp.getComments(this.post.post.id)
    .subscribe(c => {
      this.comments = c;
    })

    this.content.ionScroll.subscribe(($event) => {
      this.zone.run(() => {
        this.scroll = $event.scrollTop;
      })
    });
  }

}
