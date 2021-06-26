import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: any = [];
  subscription: Subscription;
  catId: any;
  constructor(private appService: AppService, private activatedRoute: ActivatedRoute) {
    this.subscription = this.appService.onSearch().subscribe(message => {

      if (message) {
        this.filterProduct(message);
      } else {
        this.getProducts(this.catId);
      }
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log(params.categoryId);
      if (params.categoryId) {
        this.catId = params.categoryId;
        this.getProducts(params.categoryId);
      }
    });
  }

  getProducts(catId: any) {
    this.appService.getProducts()
      .subscribe((data: any) => {
        data.forEach((_product: any) => {
          if (_product.category_id == catId) {
            this.products.push(_product);
          }

        });

      });
  }


  filterProduct(searchString: string): void {
    //this.showCategories();
    const _products = this.products;
    this.products = [];

    console.log("searchString :: ", searchString, (searchString.length))
    if (searchString.length < 0) {
      return this.getProducts(this.catId);
    }
    _products.forEach((cat: any) => {
      if (cat.search_key.indexOf(searchString) > -1 || cat.product_name.indexOf(searchString) > -1) {
        this.products.push(cat);
      }
    });
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
