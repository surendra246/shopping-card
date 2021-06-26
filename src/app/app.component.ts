import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'shopping-card';
  categories:any;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.showCategories();
  }

  showCategories() {
    this.appService.getCategories()
      .subscribe((data: any) => {
        console.log("data ::",data)
        this.categories = data;
      });
  }
}
