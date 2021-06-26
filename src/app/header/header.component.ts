import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  serachText: string = '';
  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  sendMessage(): void {
    // send message to subscribers via observable subject
    this.appService.sendSearchText(this.serachText);
  }

  clearMessages(): void {
    // clear messages
    this.appService.clearMessages();
  }

}
