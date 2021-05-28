import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

  productData:any;
  jdata : any[] = [];
  productDataList:any;
  constructor() { }

  ngOnInit(): void {
    this.productData = localStorage.getItem('products-details');
    this.productData = JSON.parse(this.productData);
    this.productDataList = localStorage.getItem('addcartData');
    this.productDataList = JSON.parse(this.productDataList);
  }

  addcart(DetailsData:any){
    DetailsData.count=1;
    var strToJson =[]
    var j=0;
    var c=0;
    var x = localStorage.getItem("addcartData")
    if(x !== null)
    {
        strToJson = JSON.parse(x);
        this.jdata=strToJson;
        for (let index = 0; index < this.jdata.length; index++) {
          const element = this.jdata[index];
          if(DetailsData.id === element.id){
            j=index;
            c=1;
          }
        }
    }
    if(c === 1){
      this.jdata[j].count += 1;
    }else{
      this.jdata.push(DetailsData);
    }
    var FinalStr = JSON.stringify(this.jdata); 
    localStorage.setItem("addcartData", FinalStr );
    window.location.reload();
  }


}
