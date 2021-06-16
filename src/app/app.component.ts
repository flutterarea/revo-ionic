import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { HomeAppPage } from '../pages/home-app/home-app';
import { HomeBoxesPage } from '../pages/home-boxes/home-boxes';
import { HomeBusinessPage } from '../pages/home-business/home-business';
import { HomeTravelPage } from '../pages/home-travel/home-travel';
import { HomeRestaurantPage } from '../pages/home-restaurant/home-restaurant';
import { HomeAdminPage } from '../pages/home-admin/home-admin';
import { HomeDarkPage } from '../pages/home-dark/home-dark';
import { BlankPage } from '../pages/blank/blank';
import { AboutPage } from '../pages/about/about';
import { ElementsButtonsPage } from '../pages/elements-buttons/elements-buttons';
import { ElementsGridPage } from '../pages/elements-grid/elements-grid';
import { ElementsFormsPage } from '../pages/elements-forms/elements-forms';
import { ElementsSlidersPage } from '../pages/elements-sliders/elements-sliders';
import { ElementsTabsPage } from '../pages/elements-tabs/elements-tabs';
import { ElementsChipsPage } from '../pages/elements-chips/elements-chips';
import { ElementsFeaturesPage } from '../pages/elements-features/elements-features';
import { ElementsTitlesPage } from '../pages/elements-titles/elements-titles';
import { FunToastPage } from '../pages/fun-toast/fun-toast';
import { FunActionPage } from '../pages/fun-action/fun-action';
import { FunLoadingPage } from '../pages/fun-loading/fun-loading';
import { FunGesturesPage } from '../pages/fun-gestures/fun-gestures';
import { FunPopupsPage } from '../pages/fun-popups/fun-popups';
import { FunSearchPage } from '../pages/fun-search/fun-search';
import { BlocksCardsPage } from '../pages/blocks-cards/blocks-cards';
import { BlocksTestimonialsPage } from '../pages/blocks-testimonials/blocks-testimonials';
import { BlocksListsPage } from '../pages/blocks-lists/blocks-lists';
import { BlogArticlesPage } from '../pages/blog-articles/blog-articles';
import { ShopPage } from '../pages/shop/shop';
import { ContactPage } from '../pages/contact/contact';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { LockPage } from '../pages/lock/lock';
import { RtlPage } from '../pages/rtl/rtl';
import { NativeRatePage } from '../pages/native-rate/native-rate';
import { NativeFullscreenPage } from '../pages/native-fullscreen/native-fullscreen';
import { NativeBadgePage } from '../pages/native-badge/native-badge';
import { NativeLocalNotificationsPage } from '../pages/native-local-notifications/native-local-notifications';
import { NativeSocialSharingPage } from '../pages/native-social-sharing/native-social-sharing';
import { NativeCameraPreviewPage } from '../pages/native-camera-preview/native-camera-preview';
import { NativeTtsPage } from '../pages/native-tts/native-tts';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LockPage;
  pages:any;
  showLevel1:any = null;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      {
        "category":"Home Pages",
        "subs":
          [
            {
              "title":"Home Full Cover",
              "icon": "icon",
              "page": HomePage
            },{
              "title":"Home App Landing",
              "icon": "icon",
              "page": HomeAppPage
            },{
              "title":"Home Boxes",
              "icon": "icon",
              "page": HomeBoxesPage
            },{
              "title":"Home Business",
              "icon": "icon",
              "page": HomeBusinessPage
            },{
              "title":"Home Travel",
              "icon": "icon",
              "page": HomeTravelPage
            },{
              "title":"Home Restaurant",
              "icon": "icon",
              "page": HomeRestaurantPage
            },{
              "title":"Home Admin Dashboard",
              "icon": "icon",
              "page": HomeAdminPage
            }
            ,{
              "title":"Home Dark",
              "icon": "icon",
              "page": HomeDarkPage
            }
            ]
      },{
        "category":"General Pages",
        "subs":
          [
            {
              "title":"About Us",
              "icon": "icon",
              "page": AboutPage
            },{
              "title":"Contact Us",
              "icon": "icon",
              "page": ContactPage
            },{
              "title":"Login",
              "icon": "icon",
              "page": LoginPage
            },{
              "title":"Register",
              "icon": "icon",
              "page": RegisterPage
            },{
              "title":"Lock",
              "icon": "icon",
              "page": LockPage
            },{
              "title":"RTL - Right to Left",
              "icon": "icon",
              "page": RtlPage
            },
            {
              "title":"Blank",
              "icon": "icon",
              "page": BlankPage
            },
            ]
      },{
        "category":"Blog",
        "subs":
          [
            {
              "title":"Blog Article List",
              "icon": "icon",
              "page": BlogArticlesPage
            }
            ]
      },{
        "category":"Shop",
        "subs":
          [
            {
              "title":"Product List",
              "icon": "icon",
              "page": ShopPage
            }
            ]
      },
      {
        "category":"Elements",
        "subs": [
              {
                "title":"Buttons",
                "icon": "icon",
                "page": ElementsButtonsPage
              },{
                "title":"Grid",
                "icon": "icon",
                "page": ElementsGridPage
              },{
                "title":"Form Elements",
                "icon": "icon",
                "page": ElementsFormsPage
              },{
                "title":"Feature boxes",
                "icon": "icon",
                "page": ElementsFeaturesPage
              },{
                "title":"Titles",
                "icon": "icon",
                "page": ElementsTitlesPage
              },{
                "title":"Sliders",
                "icon": "icon",
                "page": ElementsSlidersPage
              },{
                "title":"Tabbed Content",
                "icon": "icon",
                "page": ElementsTabsPage
              },{
                "title":"Chips",
                "icon": "icon",
                "page": ElementsChipsPage
              },
        ]
      },{
        "category":"Blocks",
        "subs": [
              {
                "title":"Card Containers",
                "icon": "icon",
                "page": BlocksCardsPage
              },{
                "title":"Testimonials",
                "icon": "icon",
                "page": BlocksTestimonialsPage
              },{
                "title":"Lists",
                "icon": "icon",
                "page": BlocksListsPage
              },

        ]
      },{
        "category":"Functions",
        "subs": [
              {
                "title":"Toast",
                "icon": "icon",
                "page": FunToastPage
              },
              {
                "title":"Action Sheet",
                "icon": "icon",
                "page": FunActionPage
              },{
                "title":"Loading",
                "icon": "icon",
                "page": FunLoadingPage
              },{
                "title":"Gestures",
                "icon": "icon",
                "page": FunGesturesPage
              },{
                "title":"Popup Boxes",
                "icon": "icon",
                "page": FunPopupsPage
              },{
                "title":"Search",
                "icon": "icon",
                "page": FunSearchPage
              },

        ]
      },{
        "category":"Native",
        "subs": [
          {
            "title":"App Rate",
            "icon": "icon",
            "page": NativeRatePage
          },{
            "title":"Fullscreen",
            "icon": "icon",
            "page": NativeFullscreenPage
          },{
            "title":"Badge",
            "icon": "icon",
            "page": NativeBadgePage
          },{
            "title":"Local Notifications",
            "icon": "icon",
            "page": NativeLocalNotificationsPage
          },{
            "title":"Social Sharing",
            "icon": "icon",
            "page": NativeSocialSharingPage
          },{
            "title":"Camera Preview - AR",
            "icon": "icon",
            "page": NativeCameraPreviewPage
          },{
            "title":"Text to Speech",
            "icon": "icon",
            "page": NativeTtsPage
          },

        ]
      },
    ]

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  toggleLevel1(idx) {
  if (this.isLevel1Shown(idx)) {
    this.showLevel1 = null;
  } else {
    this.showLevel1 = idx;
  }
};

isLevel1Shown(idx) {
  return this.showLevel1 === idx;
};



  openPage(menu) {
    this.nav.setRoot(menu);
  }
}
