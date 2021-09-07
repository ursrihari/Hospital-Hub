import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '@app/_services';
import { Share } from '@capacitor/share';
import { Browser } from '@capacitor/browser';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private account:AccountService,
    private router:Router) { }

  ngOnInit() {
  }

  logout(){
    this.account.logout();
    this.router.navigate(['login']);

  }
  async shareApp(){
    await Share.share({
      title: 'See cool stuff',
      text: 'Really awesome thing you need to see right meow',
      url: 'http://ionicframework.com/',
      dialogTitle: 'Share with buddies',
    });
  }
  aboutApp(){
    const openCapacitorSite = async () => {
      await Browser.open({ url: 'https://www.practo.com/company/about' });
    };
  }
  openPrivacyPolocy(){
    const openCapacitorSite = async () => {
      await Browser.open({ url: 'https://www.practo.com/company/privacy' });
    };
  }
}
