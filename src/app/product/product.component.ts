import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private route:ActivatedRoute,private appService:AppService) { }

  catid:any;
  products:any;

  //product showing on page loading.
  ngOnInit() {
    this.route.params.subscribe(p=>this.catid=p['catid']);
    this.showProducts(this.catid);
  }

  //product display dynamicaaly on thre request of category id
  showProducts(catid:any) {
    this.appService.getAllProducts(this.catid).subscribe(products=>this.products=products);    
  }

}
