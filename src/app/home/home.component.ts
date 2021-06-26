import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from './../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchKey: any;
  title = 'shopping-card';
  categories: any;
  subscription: Subscription;
  constructor(private appService: AppService) {
    this.subscription = this.appService.onSearch().subscribe(message => {
      const _categories = this.categories;
      if (message) {
        _categories.forEach((cat:any) => {
          if(cat.name.indexOf(message) > -1){
            _categories.push(cat);
          }
        });
        console.log( _categories)
      }
    });

  }

  ngOnInit() {
    this.showCategories();

  }

  showCategories() {
    this.appService.getCategories()
      .subscribe((data: any) => {
        console.log("data ::", data)
        this.categories = data;
      });
  }
}
