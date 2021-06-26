import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from './../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  searchKey: any;
  title = 'shopping-card';
  categories: any;
  allCategories: any;
  subscription: Subscription;
  constructor(private appService: AppService) {
    this.subscription = this.appService.onSearch().subscribe(message => {
      
      if (message) {
        this.filterCategories(message);
      }else{
        this.showCategories();
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
        this.allCategories = data;
      });
  }

  filterCategories(searchString:string): void {
    //this.showCategories();
    const _categories = this.allCategories;
    this.categories = [];

    console.log("searchString :: ", searchString, (searchString.length) )
    if(searchString.length < 0 ){
      return this.showCategories();
    }
    _categories.forEach((cat: any) => {
      if (cat.search_key.indexOf(searchString) > -1 || cat.name.indexOf(searchString) > -1) {
        this.categories.push(cat);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
