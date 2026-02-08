import {  RouterModule,Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "./component/header-component/header-component";
import { ContactComponent } from './component/contact-component/contact-component';
import { MainmenuComponent } from './component/mainmenu-component/mainmenu-component';
import { ProductComponent } from "./component/product-component/product-component";
import { MenuComponent } from "./component/menu-component/menu-component";

export const routes: Routes = [
  //  { path: '', redirectTo: 'anasayfa', pathMatch: 'full' },
   // { path: 'categories/:categoryName', component: WheelsComponent },
 
    //  { path: 'anasayfa', component: MainmenuComponent },
          { path: '', component: MainmenuComponent, pathMatch: 'full' },

     { path: 'iletisim', component: ContactComponent },
     { path: 'menu', component: MenuComponent },
{ path: 'menu/:name', component: ProductComponent }
      
  
];

@NgModule({

imports: [
  RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'disabled',   // scroll'u kapatır
    anchorScrolling: 'disabled'              // anchor scroll'u kapatır
  })
],    exports:[RouterModule]
})

export class  AppRoutingModule{

}

