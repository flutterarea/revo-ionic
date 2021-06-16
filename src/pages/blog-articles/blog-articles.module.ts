import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlogArticlesPage } from './blog-articles';

@NgModule({
  declarations: [
    BlogArticlesPage,
  ],
  imports: [
    IonicPageModule.forChild(BlogArticlesPage),
  ],
})
export class BlogArticlesPageModule {}
