import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any = [];
  constructor(private appService: AppService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log(params.categoryId);
      if (params.categoryId) {

        this.getProducts(params.categoryId);
      }
    });
  }

  getProducts(catId: any) {
    this.appService.getProducts()
      .subscribe((data: any) => {
        data.forEach((_product:any) => {
          if (_product.category_id == catId) {
            this.products.push(_product);
          }

        });

      });
  }

}
