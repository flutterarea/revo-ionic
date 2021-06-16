import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as WC from 'woocommerce-api';

@Injectable()
export class WcProvider {

  WooCommerce: any;

  constructor(public http: Http) {
    this.WooCommerce = WC({
      url: "http://pssthemes.com/wpn/",
      consumerKey: "ck_1900b6b427902b67daa598ae64295ccda27e64fb",
      consumerSecret: "cs_325a0513162aeebbc8facf8584c5242b8314b9d4"
    });
  }

  get(what) {
    return this.WooCommerce.getAsync(what).then(result => {
      return JSON.parse(result.body);
    });
  }

}
