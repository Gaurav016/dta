import { Component } from '@angular/core';
import {ChatMessage} from './chat-message';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  messages: ChatMessage[];
  constructor(private router: Router)
  {
    var cm1 = new ChatMessage("Gaurav","Hello there!","19:00");
    var cm2 = new ChatMessage("Gaurav","How are you?","19:01");
    var cm3 = new ChatMessage("Gaurav","I am fine.","20:00");
    var cm4 = new ChatMessage("Gaurav","Thank you!","12:00");

    this.messages = [cm1,cm2,cm3,cm4];
    var cm5 = new ChatMessage("Gaurav","yo!","12:00");
    this.messages.push(cm5);
  }

  navigate()
  {
this.router.Navigate(['pages/']);
  }
}
