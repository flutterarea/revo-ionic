import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, reorderArray  } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-blocks-lists',
  templateUrl: 'blocks-lists.html',
})
export class BlocksListsPage {

  items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items=[
      {
        name: 'Peter Merholz',
        message: 'Don\'t Know What To Do!',
        avatar: 'user1'
      },{
        name: 'Kareem Mostafa',
        message: 'Don\'t Know What To Do!',
        avatar: 'user2'
      },{
        name: 'Adelle Charles',
        message: 'Don\'t Know What To Do!',
        avatar: 'user3'
      },
    ]
  }

  reorderItems(indexes) {
    this.items = reorderArray(this.items, indexes);
  }

  ionViewDidLoad() {

  }

}
