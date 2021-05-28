import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { IProduct } from '../model/iProduct.type';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  
  items:IProduct[]=[];
  constructor(private products:UsersService,private router:Router) { }

  ngOnInit(): void {
    this.products.getproductsList().subscribe(data=>{
      var itemdata = Object.entries(data);
      var itemslist  = itemdata[0][1]
      this.items = itemslist as unknown as IProduct[];
    });
    
    
  }

  toggleNavbar(result:any) {
    var itemdata = JSON.stringify(result);
    debugger;
    localStorage.setItem("products-details", itemdata );
    this.router.navigate(["/DetailsPage"]);
  }

}
