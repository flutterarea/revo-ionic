import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

// Animations
import { AnimationService } from 'css-animator';

import { MyApp } from './app.component';

// Pages
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
import { BlogSingleArticlePage } from '../pages/blog-single-article/blog-single-article';
import { ShopPage } from '../pages/shop/shop';
import { ShopSingleProductPage } from '../pages/shop-single-product/shop-single-product';
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

// Ionic stuff
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Providers
import { HttpModule } from '@angular/http';
import { WpProvider } from '../providers/wp/wp';
import { WcProvider } from '../providers/wc/wc';
import { UtilsProvider } from '../providers/utils/utils';
import { MomentModule } from 'angular2-moment';

// Native
import { AppRate } from '@ionic-native/app-rate';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
import { Badge } from '@ionic-native/badge';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { SocialSharing } from '@ionic-native/social-sharing';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions } from '@ionic-native/camera-preview';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HomeAppPage,
    HomeBoxesPage,
    HomeBusinessPage,
    HomeTravelPage,
    HomeRestaurantPage,
    HomeAdminPage,
    HomeDarkPage,
    BlankPage,
    AboutPage,
    ElementsButtonsPage,
    ElementsGridPage,
    ElementsFormsPage,
    ElementsSlidersPage,
    ElementsChipsPage,
    ElementsTitlesPage,
    ElementsFeaturesPage,
    FunToastPage,
    FunActionPage,
    FunLoadingPage,
    FunGesturesPage,
    FunPopupsPage,
    FunSearchPage,
    BlocksCardsPage,
    BlocksTestimonialsPage,
    BlocksListsPage,
    ElementsTabsPage,
    BlogArticlesPage,
    BlogSingleArticlePage,
    ShopPage,
    ShopSingleProductPage,
    ContactPage,
    LoginPage,
    RegisterPage,
    LockPage,
    RtlPage,
    NativeRatePage,
    NativeFullscreenPage,
    NativeBadgePage,
    NativeLocalNotificationsPage,
    NativeSocialSharingPage,
    NativeCameraPreviewPage,
    NativeTtsPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MomentModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HomeAppPage,
    HomeBoxesPage,
    HomeBusinessPage,
    HomeTravelPage,
    HomeRestaurantPage,
    HomeAdminPage,
    HomeDarkPage,
    BlankPage,
    AboutPage,
    ElementsButtonsPage,
    ElementsGridPage,
    ElementsFormsPage,
    ElementsSlidersPage,
    ElementsChipsPage,
    ElementsTitlesPage,
    ElementsFeaturesPage,
    FunToastPage,
    FunActionPage,
    FunLoadingPage,
    FunGesturesPage,
    FunPopupsPage,
    FunSearchPage,
    BlocksCardsPage,
    BlocksTestimonialsPage,
    BlocksListsPage,
    ElementsTabsPage,
    BlogArticlesPage,
    BlogSingleArticlePage,
    ShopPage,
    ShopSingleProductPage,
    ContactPage,
    LoginPage,
    RegisterPage,
    LockPage,
    RtlPage,
    NativeRatePage,
    NativeFullscreenPage,
    NativeBadgePage,
    NativeLocalNotificationsPage,
    NativeSocialSharingPage,
    NativeCameraPreviewPage,
    NativeTtsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AnimationService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WpProvider,
    WcProvider,
    UtilsProvider,
    AppRate,
    AndroidFullScreen,
    Badge,
    LocalNotifications,
    SocialSharing,
    CameraPreview,
    TextToSpeech,
  ]
})
export class AppModule {}
