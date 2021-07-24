import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-chat-users',
  templateUrl: './chat-users.page.html',
  styleUrls: ['./chat-users.page.scss'],
})
export class ChatUsersPage implements OnInit {

  canGoBack: boolean = false;
  constructor(private routerOutlet: IonRouterOutlet,
    private router:Router) { }

  ngOnInit() {
    this.canGoBack = this.routerOutlet &&
                     this.routerOutlet.canGoBack();
}
openChatPage(){
  this.router.navigateByUrl('chat');
}

}
