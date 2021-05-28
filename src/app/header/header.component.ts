import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  productData:any;
  count:any
  changeText: boolean = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.productData = localStorage.getItem('addcartData');
    this.productData = JSON.parse(this.productData);
    if(this.productData == null){
      this.count = 0
    }else{
      this.count = 0;
      for (let index = 0; index < this.productData.length; index++) {
        const element = this.productData[index];
        this.count+=this.productData[index].count;
      }
    }  
  }
  navigateData(URL:any){

    this.router.navigate(["/"+URL]);

  }
}
