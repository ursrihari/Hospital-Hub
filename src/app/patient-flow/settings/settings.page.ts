import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '@app/_services';
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

}
