import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../app/products/products.component';
import { AboutComponent } from '../app/about/about.component';
import { HomeComponent } from '../app/home/home.component';
import { AdminComponent } from '../app/admin/admin.component';

const routes: Routes = [{ path: '',redirectTo: 'home', pathMatch: 'full' },{ path: 'home', component: HomeComponent },{ path: 'products', component: ProductsComponent },
  { path: 'about', component: AboutComponent }, { path: 'admin', component: AdminComponent }, { path: '**', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
