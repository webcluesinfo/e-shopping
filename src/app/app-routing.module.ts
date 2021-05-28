import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { AddCartComponent } from './add-cart/add-cart.component';

const routes: Routes = [

  {path:'' , component :ListingComponent},
  {path:'products' , component :ListingComponent},
  {path:'DetailsPage' , component :ProductsDetailsComponent},
  {path:'AddcartPage' , component :AddCartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
