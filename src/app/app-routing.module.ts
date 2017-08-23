import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ProductComponent } from "./product/product.component";
import { Code404Component } from "./code404/code404.component";
import { ProductDescComponent } from "./product-desc/product-desc.component";
import { ProductSellComponent } from "./product-sell/product-sell.component";
import { ChatComponent } from "./chat/chat.component";
import { LoginGuard } from "./guard/login.guard";
import { UnsavedGuard } from "./guard/unsaved.guard";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, },
    { path: 'chat', component: ChatComponent, outlet: 'aux' }, // 辅助路由
    {
        path: 'product/:id', component: ProductComponent,
        children: [ // 子路由
            { path: '', component: ProductDescComponent, },
            { path: 'desc', component: ProductDescComponent, },
            { path: 'sell/:id', component: ProductSellComponent, },
        ],
        canActivate: [LoginGuard], // 进来守护路由
        canDeactivate: [UnsavedGuard] // 离开守卫
    },
    { path: '**', component: Code404Component, },
];

@NgModule( {
    imports: [RouterModule.forRoot( routes )],
    exports: [RouterModule],
    providers: [LoginGuard, UnsavedGuard]
} )
export class AppRoutingModule {
}
