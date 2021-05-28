import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit {

  productDataList:any;
  FinalAmount=0.00;
  
  constructor(private router:Router) { }

  ngOnInit(): void {

    this.productDataList = localStorage.getItem('addcartData');
    this.productDataList = JSON.parse(this.productDataList);
    this.calculate();
  }

  calculate(){
    this.FinalAmount=0;
    for (let index = 0; index < this.productDataList.length; index++) {
      const element = this.productDataList[index];
      if(Number(element.count) === 1){
        this.FinalAmount += parseFloat(element.price);
      }
      else if (Number(element.count) === 0 || Number(element.count) < 0) {

      }
      else {
        for (let index = 0; index < Number(element.count); index++) {
          this.FinalAmount += parseFloat(element.price);
        }
      }
    }
  }

  callFunction(_event: any, post: any){
      for (let index = 0; index < this.productDataList.length; index++) {
        const element = this.productDataList[index];
        if(element.id === post.id){
          if(_event === 'minus'){
            if( this.productDataList[index].count !== 0 || this.productDataList[index].count > 1){
                 this.productDataList[index].count -= 1;
            }
        }
        if(_event === 'plus'){
          this.productDataList[index].count += 1;
        }
        var FinalStr = JSON.stringify(this.productDataList); 
        localStorage.setItem("addcartData", FinalStr );

        this.calculate();
        }
      }
  }

  checkout(){
    alert("Thank you for the shoping");
    this.productDataList = localStorage.removeItem('addcartData');
    this.router.navigate(["/"]);
  }

  remove(post: any){
    for (let index = 0; index < this.productDataList.length; index++) {
      const element = this.productDataList[index];
      if(element.id === post.id){
        this.productDataList.splice(index, 1);
      }
      var FinalStr = JSON.stringify(this.productDataList); 
      localStorage.setItem("addcartData", FinalStr );

      this.calculate();
      }
    }
}
