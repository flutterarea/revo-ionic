import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlogSingleArticlePage } from './blog-single-article';

@NgModule({
  declarations: [
    BlogSingleArticlePage,
  ],
  imports: [
    IonicPageModule.forChild(BlogSingleArticlePage),
  ],
})
export class BlogSingleArticlePageModule {}
