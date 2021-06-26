import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute,private appService:AppService) { }

  id:any;
  product:any;

  ngOnInit() {
    this.route.params.subscribe(p=>this.id=p['id']);
    this.getProduct(this.id);
  }

  getProduct(id:any){
    this.appService.getProductByID(this.id).subscribe(product=>this.product=product);
  }

  addToCart(){

  }

  cancelClick(){

  }
  
}
