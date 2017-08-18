import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Config } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { CardsPage } from '../pages/cards/cards';
import {SizePage} from '../pages/size/size';
import { FabricsPage } from '../pages/fabrics/fabrics';
import { ContentPage } from '../pages/content/content';
import { FirstRunPage } from '../pages/pages';
import { TailorsPage } from '../pages/tailors/tailors';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { MenuPage } from '../pages/menu/menu';
import { SearchPage } from '../pages/search/search';
import { SettingsPage } from '../pages/settings/settings';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { WelcomePage } from '../pages/welcome/welcome';

import { Settings } from '../providers/providers';

import { TranslateService } from '@ngx-translate/core'

@Component({
  template: `<ion-menu [content]="content">
    <ion-header>
      <ion-toolbar>
        <ion-title>منو</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
          {{p.title}}
        </button>
      </ion-list>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    //{ title: 'خانه', component: HomePage },
    { title: 'سفارش', component: TabsPage },
    { title: 'خیاط', component: TailorsPage },
    { title: 'طرح', component: CardsPage },
    { title: 'پارچه', component: FabricsPage },
    { title: 'اندازه', component: SizePage },
    { title: 'درباره ما', component: AboutPage },
  ]

  constructor(private translate: TranslateService, private platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    this.initTranslate();
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('fa');
    this.translate.use('fa'); // Set your language here
    this.platform.setDir('rtl', true);
    // if (this.translate.getBrowserLang() !== undefined) {
    //   this.translate.use(this.translate.getBrowserLang());
    // } else {
    //   this.translate.use('fa'); // Set your language here
    // }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
